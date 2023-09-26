import { useState } from 'react';
import {
  RiAddBoxFill,
  RiHomeFill,
  RiMoreFill,
  RiSparklingFill,
} from 'react-icons/ri';

import { CreateClassDrawer } from './drawers/CreateClassDrawer';
import { JoinClassDrawer } from './drawers/JoinClassDrawer';

interface Props {}

export const Navigation = (props: Props) => {
  const [isJoinClassDrawerShow, setJoinClassDrawerShow] = useState(false);
  const [isCreateClassDrawerShow, setCreateClassDrawerShow] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(1);

  const handleJoinClassDrawerShow = () => {
    setJoinClassDrawerShow(true);
  };

  const handleJoinClassDrawerHide = () => {
    setJoinClassDrawerShow(false);
  };

  const handleCreateClassDrawerShow = () => {
    setCreateClassDrawerShow(true);
  };

  const handleCreateClassDrawerHide = () => {
    setCreateClassDrawerShow(false);
  };

  const handleSelectedMenu = (selectedMenu: number) => {
    setSelectedMenu(selectedMenu);
  };

  return (
    <footer className="p-4 sticky bottom-0 bg-white">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div
            className={`flex justify-center flex-col items-center cursor-pointer ${
              selectedMenu === 1 ? 'text-primary' : 'text-gray-600'
            }`}
            onClick={() => {
              handleSelectedMenu(1);
            }}
          >
            <RiHomeFill className="text-xl" />
            <p>Groups</p>
          </div>
          <div
            className={`flex justify-center flex-col items-center cursor-pointer ${
              selectedMenu === 2 ? 'text-primary' : 'text-gray-600'
            }`}
            onClick={() => {
              handleSelectedMenu(2);
              handleJoinClassDrawerShow();
            }}
          >
            <RiSparklingFill className="text-xl" />
            <p>Join</p>
          </div>
          <div
            className={`flex justify-center flex-col items-center cursor-pointer ${
              selectedMenu === 3 ? 'text-primary' : 'text-gray-600'
            }`}
            onClick={() => {
              handleSelectedMenu(3);
              handleCreateClassDrawerShow();
            }}
          >
            <RiAddBoxFill className="text-xl" />
            <p>Create</p>
          </div>
          <div
            className={`flex justify-center flex-col items-center cursor-pointer ${
              selectedMenu === 4 ? 'text-primary' : 'text-gray-600'
            }`}
            onClick={() => {
              handleSelectedMenu(4);
            }}
          >
            <RiMoreFill className="text-xl" />
            <p>More</p>
          </div>
        </div>
      </div>
      <JoinClassDrawer
        isJoinClassDrawerShow={isJoinClassDrawerShow}
        handleJoinClassDrawerHide={handleJoinClassDrawerHide}
      />
      <CreateClassDrawer
        isCreateClassDrawerShow={isCreateClassDrawerShow}
        handleCreateClassDrawerHide={handleCreateClassDrawerHide}
      />
    </footer>
  );
};
