import React from 'react';

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export default function Drawer({ children, isOpen, onClose }: Props) {
  return (
    <div
      className={
        ' fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out ' +
        (isOpen
          ? ' transition-opacity opacity-100 duration-500 translate-y-0  '
          : ' transition-all delay-500 opacity-0 translate-y-full  ')
      }
    >
      <section
        className={
          'max-h-lg bottom-0 absolute bg-white w-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  rounded-t' +
          (isOpen ? ' translate-y-0 ' : ' translate-y-full ')
        }
      >
        <div className="relative max-h-lg py-5 flex flex-col overflow-y-scroll w-full">
          {children}
        </div>
      </section>
      <section
        className=" h-full w-screen cursor-pointer "
        onClick={onClose}
      ></section>
    </div>
  );
}
