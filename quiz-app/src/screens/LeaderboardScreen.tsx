import { ChevronDown, Crown } from 'lucide-react'
import { Card } from '@ds/components/Card/Card'
import { leaderboardData } from '../data'

export function LeaderboardScreen() {
  const first = leaderboardData.find((p) => p.rank === 1)!
  const second = leaderboardData.find((p) => p.rank === 2)!
  const third = leaderboardData.find((p) => p.rank === 3)!
  const rest = leaderboardData.filter((p) => p.rank > 3)

  return (
    <div className="screen">
      <div className="leaderboard">
        <div className="leaderboard__header">
          <div className="leaderboard__title">Leaderboard</div>
          <button className="leaderboard__filter">
            This Week <ChevronDown size={14} />
          </button>
        </div>

        <div className="leaderboard__podium">
          {/* 2nd place */}
          <div className="leaderboard__podium-item leaderboard__podium-item--second">
            <div className="leaderboard__podium-avatar">{second.initials}</div>
            <div className="leaderboard__podium-name">{second.name}</div>
            <div className="leaderboard__podium-score">{second.score.toLocaleString()}</div>
            <div className="leaderboard__podium-bar" />
          </div>

          {/* 1st place */}
          <div className="leaderboard__podium-item leaderboard__podium-item--first">
            <div className="leaderboard__podium-crown">
              <Crown size={22} />
            </div>
            <div className="leaderboard__podium-avatar">{first.initials}</div>
            <div className="leaderboard__podium-name">{first.name}</div>
            <div className="leaderboard__podium-score">{first.score.toLocaleString()}</div>
            <div className="leaderboard__podium-bar" />
          </div>

          {/* 3rd place */}
          <div className="leaderboard__podium-item leaderboard__podium-item--third">
            <div className="leaderboard__podium-avatar">{third.initials}</div>
            <div className="leaderboard__podium-name">{third.name}</div>
            <div className="leaderboard__podium-score">{third.score.toLocaleString()}</div>
            <div className="leaderboard__podium-bar" />
          </div>
        </div>

        <div className="leaderboard__list">
          <Card className="leaderboard__list-card">
            {rest.map((player) => (
              <div key={player.rank} className="leaderboard__row">
                <div className="leaderboard__rank">#{player.rank}</div>
                <div className="leaderboard__row-avatar">{player.initials}</div>
                <div className="leaderboard__row-name">{player.name}</div>
                <div className="leaderboard__row-score">{player.score.toLocaleString()}</div>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  )
}
