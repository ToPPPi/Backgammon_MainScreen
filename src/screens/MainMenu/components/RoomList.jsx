import { useState } from 'react'
import { mockRooms } from '../../../data/mockData'
import RoomCard from './RoomCard'
import '../../../styles/RoomList.css'

// Список активных игровых комнат
const RoomList = () => {
  const [rooms, setRooms] = useState(mockRooms)

  const handleEnterRoom = (roomId) => {
    console.log(`Вход в комнату ${roomId}`)
    setRooms(rooms.filter(room => room.id !== roomId))
  }

  return (
    <div className="rooms-section">
      <div className="rooms-header">
        <h2 className="rooms-title">ACTIVE GAMES</h2>
        <span className="rooms-count">{rooms.length} available</span>
      </div>

      <div className="rooms-container">
        {rooms.length > 0 ? (
          rooms.map(room => (
            <RoomCard
              key={room.id}
              room={room}
              onEnter={handleEnterRoom}
            />
          ))
        ) : (
          <div className="no-rooms">
            <h3 className="no-rooms-title">No Active Games</h3>
            <p className="no-rooms-text">Create your own game or check back later</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default RoomList