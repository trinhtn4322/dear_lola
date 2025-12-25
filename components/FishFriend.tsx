
import React from 'react';

const FishFriend: React.FC<{ type: string; className?: string }> = ({ type, className = "" }) => {
  const getFish = () => {
    switch(type) {
      case 'clown': return '🐠';
      case 'puffer': return '🐡';
      case 'shark': return '🦈';
      case 'octopus': return '🐙';
      case 'shrimp': return '🦐';
      default: return '🐟';
    }
  };

  return (
    <div className={`text-6xl animate-float inline-block filter drop-shadow-lg ${className}`}>
      <div className="relative">
        {getFish()}
        {/* Santa Hat */}
        <div className="absolute -top-4 left-2 text-2xl rotate-12">🎅</div>
      </div>
    </div>
  );
};

export default FishFriend;
