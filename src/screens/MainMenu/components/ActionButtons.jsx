import '../../../styles/ActionButtons.css'

// Кнопки управления игрой и балансом
const ActionButtons = () => {
  const handleCreateGame = () => {
    console.log('Создание новой игры')
  }

  const handleDeposit = () => {
    console.log('Пополнение баланса')
  }

  const handleWithdraw = () => {
    console.log('Вывод средств')
  }

  return (
    <div className="action-buttons">
      <button
        onClick={handleCreateGame}
        className="create-game-button"
      >
        CREATE GAME
      </button>

      <div className="balance-buttons">
        <button
          onClick={handleDeposit}
          className="balance-button deposit-button"
        >
          <span>♦</span>
          <span>DEPOSIT</span>
        </button>

        <button
          onClick={handleWithdraw}
          className="balance-button withdraw-button"
        >
          <span>♦</span>
          <span>WITHDRAW</span>
        </button>
      </div>
    </div>
  )
}

export default ActionButtons