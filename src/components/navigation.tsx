import React, { useState } from 'react';

import { MenuItemProps } from '@/interfaces/Classes';

import MenuItem from './menu-item';

interface Props {
  menuOptions: MenuItemProps[];
}

export const Navigation: React.FC<Props> = ({ menuOptions }: Props) => {
  const [selectedMenu, setSelectedMenu] = useState('');

  return (
    <footer className="p-4 sticky bottom-0 bg-white">
      <div className="container mx-auto">
        <div className="flex justify-between">
          {menuOptions.map((option, index) => (
            <MenuItem
              key={index}
              icon={option.icon}
              title={option.title}
              onClick={() => {
                setSelectedMenu(option?.id ?? '');
                option.onClick?.();
              }}
              isSelected={option.id === selectedMenu}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};
