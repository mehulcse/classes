import { useState } from 'react';
import {
  RiAddBoxFill,
  RiHomeFill,
  RiMoreFill,
  RiSparklingFill,
} from 'react-icons/ri';

import { CreatePostDrawer } from './drawers/CreatePostDrawer';

export const NewPostNavigation = () => {
  const [isCreatePostDrawerShow, setCreatePostDrawerShow] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(1);

  const handleCreatePostDrawerShow = () => {
    setCreatePostDrawerShow(true);
  };

  const handleCreatePostDrawerHide = () => {
    setCreatePostDrawerShow(false);
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
            <p>Posts</p>
          </div>
          <div
            className={`flex justify-center flex-col items-center cursor-pointer ${
              selectedMenu === 2 ? 'text-primary' : 'text-gray-600'
            }`}
            onClick={() => {
              handleSelectedMenu(2);
            }}
          >
            <RiSparklingFill className="text-xl" />
            <p>Rewards</p>
          </div>
          <div
            className={`flex justify-center flex-col items-center cursor-pointer ${
              selectedMenu === 3 ? 'text-primary' : 'text-gray-600'
            }`}
            onClick={() => {
              handleSelectedMenu(3);
              handleCreatePostDrawerShow();
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
      <CreatePostDrawer
        isCreatePostDrawerShow={isCreatePostDrawerShow}
        handleCreatePostDrawerHide={handleCreatePostDrawerHide}
      />
    </footer>
  );
};
