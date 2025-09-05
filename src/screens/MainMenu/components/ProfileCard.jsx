import { mockProfile } from '../../../data/mockData'
import '../../../styles/ProfileCard.css'

// Компонент профиля пользователя
const ProfileCard = () => {
  const { username, balance, level, winRate, totalGames, wins, losses } = mockProfile

  return (
    <div className="profile-card">
      <div className="profile-header">
        <div className="avatar-container">
          <img
            src="/assets/player1.png"
            alt="User Avatar"
            className="avatar"
          />
          <div className="user-info">
            <h2>{username}</h2>
            <div className="balance">
              <img
                src="/assets/diamond.png"
                alt="Crystal"
                className="balance-icon"
              />
              <span>{balance.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-item">
          <div className="stat-value">{level}</div>
          <div className="stat-label">Level</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">{winRate}</div>
          <div className="stat-label">Win Rate</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">{wins}</div>
          <div className="stat-label">Wins</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">{losses}</div>
          <div className="stat-label">Losses</div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard