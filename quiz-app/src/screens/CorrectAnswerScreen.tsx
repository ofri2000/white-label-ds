import { ArrowLeft, X, CircleCheck, CircleX } from 'lucide-react'
import { ProgressIndicator } from '@ds/components/ProgressIndicator/ProgressIndicator'
import { Button } from '@ds/components/Button/Button'
import type { Question } from '../data'

interface CorrectAnswerScreenProps {
  question: Question
  questionIndex: number
  totalQuestions: number
  selectedOption: number
  onNext: () => void
  onBack: () => void
}

const letters = ['A', 'B', 'C', 'D']

export function CorrectAnswerScreen({
  question,
  questionIndex,
  totalQuestions,
  selectedOption,
  onNext,
  onBack,
}: CorrectAnswerScreenProps) {
  const isCorrect = selectedOption === question.correctIndex
  const progress = ((questionIndex + 1) / totalQuestions) * 100

  return (
    <div className="screen">
      <div className="correct">
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

        <div className="correct__celebration">
          <div
            className="correct__icon-circle"
            style={{ background: isCorrect ? '#D1FAE5' : '#FEE2E2' }}
          >
            {isCorrect ? (
              <CircleCheck size={36} color="#059669" />
            ) : (
              <CircleX size={36} color="#EF4444" />
            )}
          </div>
          <div className="correct__title" style={{ color: isCorrect ? '#059669' : '#EF4444' }}>
            {isCorrect ? 'Correct!' : 'Wrong!'}
          </div>
          <div className="correct__points">
            {isCorrect ? '+120 points' : '+0 points'}
          </div>
        </div>

        <div className="correct__explanation">
          <div className="correct__explanation-label">Did you know?</div>
          <div className="correct__explanation-text">{question.explanation}</div>
        </div>

        <div className="correct__options">
          {question.options.map((option, i) => {
            const isCorrectOption = i === question.correctIndex
            const isSelectedWrong = i === selectedOption && !isCorrectOption
            let optionClass = 'question__option question__option--dimmed'
            if (isCorrectOption) optionClass = 'question__option question__option--correct'
            if (isSelectedWrong) optionClass = 'question__option question__option--wrong'

            return (
              <div key={i} className={optionClass}>
                <div className="question__option-letter">{letters[i]}</div>
                <div className="question__option-text">{option}</div>
                {isCorrectOption && (
                  <CircleCheck size={20} color="#14B8A6" className="question__option-icon" />
                )}
                {isSelectedWrong && (
                  <CircleX size={20} color="#EF4444" className="question__option-icon" />
                )}
              </div>
            )
          })}
        </div>

        <div className="correct__next-btn">
          <Button className="quiz-btn-purple" style={{ width: '100%' }} onClick={onNext}>
            {questionIndex < totalQuestions - 1 ? 'Next Question' : 'See Results'}
          </Button>
        </div>
      </div>
    </div>
  )
}
