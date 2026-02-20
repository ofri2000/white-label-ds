import { useState, useEffect, useCallback } from 'react'
import { Home, Play, Trophy, Signal, Wifi, Battery } from 'lucide-react'
import { HomeScreen } from './screens/HomeScreen'
import { QuestionScreen } from './screens/QuestionScreen'
import { CorrectAnswerScreen } from './screens/CorrectAnswerScreen'
import { LeaderboardScreen } from './screens/LeaderboardScreen'
import { ResultsScreen } from './screens/ResultsScreen'
import { questions } from './data'
import './App.css'

type Screen = 'home' | 'question' | 'answer' | 'leaderboard' | 'results'
type Tab = 'home' | 'play' | 'scores'

function StatusBar() {
  return (
    <div className="status-bar">
      <span>9:41</span>
      <div className="status-bar__icons">
        <Signal size={14} />
        <Wifi size={14} />
        <Battery size={14} />
      </div>
    </div>
  )
}

function BottomBar({ activeTab, onTabChange }: { activeTab: Tab; onTabChange: (t: Tab) => void }) {
  return (
    <div className="bottom-bar">
      <button className={`bottom-bar__item ${activeTab === 'home' ? 'bottom-bar__item--active' : ''}`} onClick={() => onTabChange('home')}>
        <Home size={22} />
        <span>Home</span>
      </button>
      <button className={`bottom-bar__item ${activeTab === 'play' ? 'bottom-bar__item--active' : ''}`} onClick={() => onTabChange('play')}>
        <Play size={22} />
        <span>Play</span>
      </button>
      <button className={`bottom-bar__item ${activeTab === 'scores' ? 'bottom-bar__item--active' : ''}`} onClick={() => onTabChange('scores')}>
        <Trophy size={22} />
        <span>Scores</span>
      </button>
    </div>
  )
}

function App() {
  const [screen, setScreen] = useState<Screen>('home')
  const [activeTab, setActiveTab] = useState<Tab>('home')
  const [questionIndex, setQuestionIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const [streak, setStreak] = useState(0)
  const [bestStreak, setBestStreak] = useState(0)
  const [timeLeft, setTimeLeft] = useState(30)

  // Timer countdown during question
  useEffect(() => {
    if (screen !== 'question') return
    if (timeLeft <= 0) return
    const interval = setInterval(() => setTimeLeft((t) => t - 1), 1000)
    return () => clearInterval(interval)
  }, [screen, timeLeft])

  const resetQuiz = useCallback(() => {
    setQuestionIndex(0)
    setSelectedOption(null)
    setScore(0)
    setCorrectCount(0)
    setStreak(0)
    setBestStreak(0)
    setTimeLeft(30)
  }, [])

  const handleStartQuiz = () => {
    resetQuiz()
    setScreen('question')
    setActiveTab('play')
  }

  const handleSelectOption = (index: number) => {
    setSelectedOption(index)
    const isCorrect = index === questions[questionIndex].correctIndex
    if (isCorrect) {
      const points = Math.max(60, 120 - (30 - timeLeft) * 2)
      setScore((s) => s + points)
      setCorrectCount((c) => c + 1)
      setStreak((s) => {
        const newStreak = s + 1
        setBestStreak((b) => Math.max(b, newStreak))
        return newStreak
      })
    } else {
      setStreak(0)
    }
    setTimeout(() => setScreen('answer'), 600)
  }

  const handleNextQuestion = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex((i) => i + 1)
      setSelectedOption(null)
      setTimeLeft(30)
      setScreen('question')
    } else {
      setScreen('results')
    }
  }

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab)
    if (tab === 'home') setScreen('home')
    if (tab === 'scores') setScreen('leaderboard')
    if (tab === 'play') handleStartQuiz()
  }

  const showBottomBar = screen === 'home' || screen === 'leaderboard'

  return (
    <>
      <StatusBar />

      {screen === 'home' && (
        <HomeScreen
          onStartQuiz={handleStartQuiz}
          onGoToLeaderboard={() => handleTabChange('scores')}
        />
      )}

      {screen === 'question' && (
        <QuestionScreen
          question={questions[questionIndex]}
          questionIndex={questionIndex}
          totalQuestions={questions.length}
          selectedOption={selectedOption}
          score={score}
          streak={streak}
          timeLeft={timeLeft}
          onSelectOption={handleSelectOption}
          onBack={() => { setScreen('home'); setActiveTab('home') }}
        />
      )}

      {screen === 'answer' && selectedOption !== null && (
        <CorrectAnswerScreen
          question={questions[questionIndex]}
          questionIndex={questionIndex}
          totalQuestions={questions.length}
          selectedOption={selectedOption}
          onNext={handleNextQuestion}
          onBack={() => { setScreen('home'); setActiveTab('home') }}
        />
      )}

      {screen === 'leaderboard' && <LeaderboardScreen />}

      {screen === 'results' && (
        <ResultsScreen
          score={score}
          correctCount={correctCount}
          totalQuestions={questions.length}
          avgTime={12}
          bestStreak={bestStreak}
          onPlayAgain={handleStartQuiz}
          onGoHome={() => { setScreen('home'); setActiveTab('home') }}
        />
      )}

      {showBottomBar && <BottomBar activeTab={activeTab} onTabChange={handleTabChange} />}
    </>
  )
}

export default App
