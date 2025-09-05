import SplashScreen from './screens/SplashScreen/SplashScreen'
import MainMenu from './screens/MainMenu/MainMenu'
import { useState } from 'react'

// Основной компонент приложения
function App() {
  const [currentScreen, setCurrentScreen] = useState('splash')

  const handleNewGame = () => {
    setCurrentScreen('main-menu')
  }

  const handleContinue = () => {
    setCurrentScreen('main-menu')
  }

  return (
    <div className="min-h-screen bg-dark-bg">
      {currentScreen === 'splash' && <SplashScreen onNewGame={handleNewGame} onContinue={handleContinue} />}
      {currentScreen === 'main-menu' && <MainMenu />}
    </div>
  )
}

export default App