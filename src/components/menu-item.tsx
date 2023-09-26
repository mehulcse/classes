import React from 'react';

import { MenuItemProps } from '@/interfaces/Classes';

interface Props extends MenuItemProps {
  isSelected: boolean;
}

const MenuItem: React.FC<Props> = ({ icon, title, onClick, isSelected }) => {
  return (
    <div
      className={`flex justify-center flex-col items-center cursor-pointer ${
        isSelected ? 'text-primary' : 'text-gray-600'
      }`}
      onClick={onClick}
    >
      {icon}
      <p>{title}</p>
    </div>
  );
};

export default MenuItem;
