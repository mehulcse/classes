import Image from 'next/image';

import Drawer from '@/components/drawer';

interface Props {
  isJoinClassDrawerShow: boolean;
  handleJoinClassDrawerHide: () => void;
}

export const JoinClassDrawer = (props: Props) => {
  const { isJoinClassDrawerShow, handleJoinClassDrawerHide } = props || {};

  return (
    <>
      <Drawer
        isOpen={isJoinClassDrawerShow}
        onClose={handleJoinClassDrawerHide}
      >
        <div className="px-4">
          <div className="flex justify-center mt-2">
            <Image
              src={'/icons/svg/join-class.svg'}
              alt=""
              height={70}
              width={70}
            />
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-medium leading-8">Join Class</h2>
            <span className="text-grayish font-normal leading-5">
              If you want to start quiz please enter a quiz id
            </span>
          </div>
          <div className="mt-8">
            <div>
              <input
                type="text"
                className="form-input px-4 py-3 rounded-xl border-gray-400 w-full"
                placeholder="please enter class id"
              />
              <button
                className="mt-10 bg-primary text-white font-semibold px-4 py-3 rounded-xl w-full"
                onClick={() => {
                  handleJoinClassDrawerHide();
                }}
              >
                Join Class
              </button>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};
