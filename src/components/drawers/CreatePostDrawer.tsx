import Image from 'next/image';

import Drawer from '@/components/drawer';

interface Props {
  isCreatePostDrawerShow: boolean;
  handleCreatePostDrawerHide: () => void;
}

export const CreatePostDrawer = (props: Props) => {
  const { isCreatePostDrawerShow, handleCreatePostDrawerHide } = props || {};

  return (
    <>
      <Drawer
        isOpen={isCreatePostDrawerShow}
        onClose={handleCreatePostDrawerHide}
      >
        <div className="px-4">
          <div className="flex justify-center mt-2">
            <Image
              src={'/icons/svg/create-class.svg'}
              alt=""
              height={70}
              width={70}
            />
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-medium leading-8">Create Post</h2>
            <span className="text-grayish font-normal leading-5">
              Please select your post type and share your post
            </span>
          </div>
          <div className="mt-8">
            <div>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-8">
                <div className="rounded-xl border-gray-300 h-24 w-24 justify-center bg-primary text-center align-middle cursor-pointer">
                  <div className="rounded-full h-10 w-10 bg-white m-auto mt-3">
                    <Image
                      className="inline-block align-middle mt-3"
                      src={'/icons/svg/text.svg'}
                      alt=""
                      height={20}
                      width={20}
                    />
                  </div>
                  <span className="text-white font-medium text-sm">Text</span>
                </div>
                <div className="border rounded-xl border-gray-300 h-24 w-24 justify-center bg-white text-center align-middle cursor-pointer">
                  <div className="rounded-full h-10 w-10 bg-primary m-auto mt-3">
                    <Image
                      className="inline-block align-middle mt-2"
                      src={'/icons/svg/file.svg'}
                      alt=""
                      height={20}
                      width={20}
                    />
                  </div>
                  <span className="font-medium text-sm">File</span>
                </div>
                <div className="border rounded-xl border-gray-300 h-24 w-24 justify-center bg-white text-center align-middle cursor-pointer">
                  <div className="rounded-full h-10 w-10 bg-primary m-auto mt-3">
                    <Image
                      className="inline-block align-middle mt-2"
                      src={'/icons/svg/link.svg'}
                      alt=""
                      height={20}
                      width={20}
                    />
                  </div>
                  <span className="font-medium text-sm">Link</span>
                </div>
                <div className="border rounded-xl border-gray-300 h-24 w-24 justify-center bg-white text-center align-middle cursor-pointer">
                  <div className="rounded-full h-10 w-10 bg-primary m-auto mt-3">
                    <Image
                      className="inline-block align-middle mt-2"
                      src={'/icons/svg/attendance.svg'}
                      alt=""
                      height={20}
                      width={20}
                    />
                  </div>
                  <span className="font-medium text-sm">Attendance</span>
                </div>
                <div className="border rounded-xl border-gray-300 h-24 w-24 justify-center bg-white text-center align-middle cursor-pointer">
                  <div className="rounded-full h-10 w-10 bg-primary m-auto mt-3">
                    <Image
                      className="inline-block align-middle mt-3"
                      src={'/icons/svg/meeting.svg'}
                      alt=""
                      height={20}
                      width={20}
                    />
                  </div>
                  <span className="font-medium text-sm">Meeting</span>
                </div>
                <div className="border rounded-xl border-gray-300 h-24 w-24 justify-center bg-white text-center align-middle cursor-pointer">
                  <div className="rounded-full h-10 w-10 bg-primary m-auto mt-3">
                    <Image
                      className="inline-block align-middle mt-3"
                      src={'/icons/svg/task.svg'}
                      alt=""
                      height={20}
                      width={20}
                    />
                  </div>
                  <span className="font-medium text-sm">Task</span>
                </div>
                <div className="border rounded-xl border-gray-300 h-24 w-24 justify-center bg-white text-center align-middle cursor-pointer">
                  <div className="rounded-full h-10 w-10 bg-primary m-auto mt-3">
                    <Image
                      className="inline-block align-middle mt-2"
                      src={'/icons/svg/reminder.svg'}
                      alt=""
                      height={20}
                      width={20}
                    />
                  </div>
                  <span className="font-medium text-sm">Reminder</span>
                </div>
                <div className="border rounded-xl border-gray-300 h-24 w-24 justify-center bg-white text-center align-middle cursor-pointer">
                  <div className="rounded-full h-10 w-10 bg-primary m-auto mt-3">
                    <Image
                      className="inline-block align-middle mt-3"
                      src={'/icons/svg/poll.svg'}
                      alt=""
                      height={20}
                      width={20}
                    />
                  </div>
                  <span className="font-medium text-sm">Poll</span>
                </div>
                <div className="border rounded-xl border-gray-300 h-24 w-24 justify-center bg-white text-center align-middle cursor-pointer">
                  <div className="rounded-full h-10 w-10 bg-primary m-auto mt-3">
                    <Image
                      className="inline-block align-middle mt-2"
                      src={'/icons/svg/quiz.svg'}
                      alt=""
                      height={20}
                      width={20}
                    />
                  </div>
                  <span className="font-medium text-sm">Quiz</span>
                </div>
              </div>
              <button
                className="mt-10 bg-primary text-white font-semibold px-4 py-3 rounded-xl w-full"
                onClick={() => {
                  handleCreatePostDrawerHide();
                }}
              >
                Create Post
              </button>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};
