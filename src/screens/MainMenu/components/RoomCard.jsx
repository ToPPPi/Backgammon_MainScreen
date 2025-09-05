import { useState } from 'react'
import '../../../styles/RoomCard.css'

// Карточка игровой комнаты с оппонентом и ставкой
const RoomCard = ({ room, onEnter }) => {
  const { id, opponent, bet } = room

  // Определяем уровень риска по ставке
  const getRiskLevel = (betAmount) => {
    if (betAmount >= 100) return { level: 'HIGH', className: 'risk-high' }
    if (betAmount >= 50) return { level: 'MEDIUM', className: 'risk-medium' }
    return { level: 'LOW', className: 'risk-low' }
  }

  const risk = getRiskLevel(bet)

  const handleEnterRoom = () => {
    onEnter(id)
  }

  return (
    <div className="room-card">
      <div className="room-content">
        <div className="opponent-info">
          <div className="opponent-avatar">
            <span>{opponent.charAt(0).toUpperCase()}</span>
          </div>
          <div className="opponent-details">
            <h3>{opponent}</h3>
            <span className={`risk-badge ${risk.className}`}>
              {risk.level} RISK
            </span>
          </div>
        </div>

        <div className="game-info">
          <div className="bet-info">
            <img
              src="/assets/diamond.png"
              alt="Diamond"
              className="balance-icon"
            />
            <span className="bet-amount">{bet}</span>
          </div>
        </div>

        <button
          onClick={handleEnterRoom}
          className="enter-button"
        >
          ENTER GAME
        </button>
      </div>
    </div>
  )
}

export default RoomCard