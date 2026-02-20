import { Globe, Music, Film, Trophy, Zap, User } from 'lucide-react'

interface HomeScreenProps {
  onStartQuiz: () => void
  onGoToLeaderboard: () => void
}

const categories = [
  { name: 'General', count: '120 Qs', icon: Globe, bg: '#EDE9FE', iconBg: '#DDD6FE', color: '#8B5CF6' },
  { name: 'Music', count: '85 Qs', icon: Music, bg: '#CCFBF1', iconBg: '#99F6E4', color: '#14B8A6' },
  { name: 'Movies', count: '95 Qs', icon: Film, bg: '#FCE7F3', iconBg: '#FBCFE8', color: '#F472B6' },
  { name: 'Sports', count: '110 Qs', icon: Trophy, bg: '#FEF3C7', iconBg: '#FDE68A', color: '#F59E0B' },
]

export function HomeScreen({ onStartQuiz, onGoToLeaderboard }: HomeScreenProps) {
  return (
    <div className="screen">
      <div className="home">
        <div className="home__header">
          <div>
            <div className="home__title">Pub Quiz</div>
            <div className="home__subtitle">Test your knowledge!</div>
          </div>
          <div className="home__avatar">
            <User size={22} />
          </div>
        </div>

        <div className="home__stats">
          <div className="home__stat-card home__stat-card--purple">
            <div className="home__stat-value">47</div>
            <div className="home__stat-label">Day Streak</div>
          </div>
          <div className="home__stat-card home__stat-card--surface">
            <div className="home__stat-value">2,847</div>
            <div className="home__stat-label">Total Points</div>
          </div>
        </div>

        <div className="home__section-title">Categories</div>
        <div className="home__categories">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <button key={cat.name} className="home__category" style={{ background: cat.bg }} onClick={onStartQuiz}>
                <div className="home__category-icon" style={{ background: cat.iconBg }}>
                  <Icon size={22} color={cat.color} />
                </div>
                <div>
                  <div className="home__category-name">{cat.name}</div>
                  <div className="home__category-count">{cat.count}</div>
                </div>
              </button>
            )
          })}
        </div>

        <div className="home__cta">
          <div className="home__cta-badge">Popular</div>
          <div className="home__cta-title">Quick Round</div>
          <div className="home__cta-desc">10 random questions, 30 seconds each</div>
          <button className="home__cta-btn" onClick={onStartQuiz}>
            <Zap size={14} style={{ display: 'inline', verticalAlign: -2, marginRight: 4 }} />
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  )
}
