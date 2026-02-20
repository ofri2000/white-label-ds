import { Trophy, Share2, Home } from 'lucide-react'
import { Button } from '@ds/components/Button/Button'

interface ResultsScreenProps {
  score: number
  correctCount: number
  totalQuestions: number
  avgTime: number
  bestStreak: number
  onPlayAgain: () => void
  onGoHome: () => void
}

export function ResultsScreen({
  score,
  correctCount,
  totalQuestions,
  avgTime,
  bestStreak,
  onPlayAgain,
  onGoHome,
}: ResultsScreenProps) {
  return (
    <div className="screen">
      <div className="results">
        <div className="results__trophy">
          <Trophy size={36} color="#8B5CF6" />
        </div>

        <div className="results__title">Quiz Complete!</div>
        <div className="results__subtitle">Great job, here are your results</div>

        <div className="results__score-card">
          <div className="results__score-value">{score}</div>
          <div className="results__score-label">Total Points</div>
        </div>

        <div className="results__stats">
          <div className="results__stat results__stat--teal">
            <div className="results__stat-value">{correctCount}/{totalQuestions}</div>
            <div className="results__stat-label">Correct</div>
          </div>
          <div className="results__stat results__stat--purple">
            <div className="results__stat-value">{avgTime}s</div>
            <div className="results__stat-label">Avg Time</div>
          </div>
          <div className="results__stat results__stat--pink">
            <div className="results__stat-value">{bestStreak}</div>
            <div className="results__stat-label">Best Streak</div>
          </div>
        </div>

        <div className="results__actions">
          <Button className="quiz-btn-purple" onClick={onPlayAgain}>
            Play Again
          </Button>
          <Button className="quiz-btn-outline" iconLeft={<Share2 size={16} />}>
            Share Results
          </Button>
          <Button className="quiz-btn-outline" iconLeft={<Home size={16} />} onClick={onGoHome}>
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  )
}
