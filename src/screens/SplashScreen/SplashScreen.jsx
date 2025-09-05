import '../../styles/SplashScreen.css'
import { useState } from 'react'

// Экран приветствия приложения
const SplashScreen = ({ onNewGame, onContinue }) => {
  const [isAnimating, setIsAnimating] = useState(false)

  const handleNewGameClick = () => {
    setIsAnimating(true)
    setTimeout(() => {
      onNewGame()
    }, 300)
  }

  const handleContinueClick = () => {
    setIsAnimating(true)
    setTimeout(() => {
      onContinue()
    }, 300)
  }

  return (
    <div className="splash-screen">
      <div className="logo-container">
        <h1 className="logo-title">BACKGAMMON</h1>
        <div className="logo-subtitle">bet platform</div>
        <img
          src="/assets/ruble.png"
          alt="Ruble"
          className="logo-image"
        />
        <h1 className="logo-title">RUBLE</h1>
      </div>

      <div className="buttons-container">
        <button
          onClick={handleNewGameClick}
          disabled={isAnimating}
          className="splash-button new-game-button"
        >
          NEW GAME
        </button>

        <button
          onClick={handleContinueClick}
          disabled={isAnimating}
          className="splash-button continue-button"
        >
          CONTINUE
        </button>
      </div>

      <div className="footer">
        Backgammon Bet v1.0
      </div>
    </div>
  )
}

export default SplashScreen