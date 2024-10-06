import React, { useState } from 'react';

interface PlayerJoinProps {
  onJoin: (playerName: string) => void;
}

const PlayerJoin: React.FC<PlayerJoinProps> = ({ onJoin }) => {
  const [name, setName] = useState('');

  const handleJoin = () => {
    if (name) {
      onJoin(name);
      setName(''); // reset after joining
    }
  };

  return (
    <div className="player-join">
      <input
        type="text"
        value={name}
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleJoin}>Join Game</button>
    </div>
  );
};

export default PlayerJoin;
