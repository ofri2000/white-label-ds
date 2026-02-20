import { ArrowLeft, X, Timer, Lightbulb, Zap, Flame } from 'lucide-react'
import { ProgressIndicator } from '@ds/components/ProgressIndicator/ProgressIndicator'
import type { Question } from '../data'

interface QuestionScreenProps {
  question: Question
  questionIndex: number
  totalQuestions: number
  selectedOption: number | null
  score: number
  streak: number
  timeLeft: number
  onSelectOption: (index: number) => void
  onBack: () => void
}

const letters = ['A', 'B', 'C', 'D']

export function QuestionScreen({
  question,
  questionIndex,
  totalQuestions,
  selectedOption,
  score,
  streak,
  timeLeft,
  onSelectOption,
  onBack,
}: QuestionScreenProps) {
  const progress = ((questionIndex + 1) / totalQuestions) * 100

  return (
    <div className="screen">
      <div className="question">
        <div className="question__topbar">
          <button className="question__nav-btn" onClick={onBack}>
            <ArrowLeft size={20} />
          </button>
          <span className="question__counter">
            {questionIndex + 1} / {totalQuestions}
          </span>
          <button className="question__nav-btn" onClick={onBack}>
            <X size={20} />
          </button>
        </div>

        <div className="question__progress quiz-progress">
          <ProgressIndicator type="Bar" value={progress} />
        </div>

        <div className="question__category-badge">
          {question.category}
        </div>

        <div className="question__text">{question.question}</div>

        <div className="question__timer">
          <Timer size={16} />
          <span>{timeLeft}s remaining</span>
        </div>

        <div className="question__options">
          {question.options.map((option, i) => (
            <button
              key={i}
              className={`question__option ${selectedOption === i ? 'question__option--selected' : ''}`}
              onClick={() => onSelectOption(i)}
            >
              <div className="question__option-letter">{letters[i]}</div>
              <div className="question__option-text">{option}</div>
            </button>
          ))}
        </div>

        <div className="question__hint">
          <Lightbulb size={18} className="question__hint-icon" />
          <span className="question__hint-text">Use a hint (2 remaining)</span>
        </div>

        <div className="question__scorebar">
          <div className="question__scorebar-item question__scorebar-item--purple">
            <Zap size={16} /> {score} pts
          </div>
          <div className="question__scorebar-item question__scorebar-item--teal">
            <Flame size={16} /> {streak} correct streak
          </div>
        </div>
      </div>
    </div>
  )
}
