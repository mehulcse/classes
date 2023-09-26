import { Listbox, Transition } from '@headlessui/react';
import Image from 'next/image';
import { Fragment, useState } from 'react';
import { HiOutlineCheck } from 'react-icons/hi';
import { HiChevronUpDown as ChevronUpDownIcon } from 'react-icons/hi2';

import Drawer from '@/components/drawer';

interface Props {
  isCreateClassDrawerShow: boolean;
  handleCreateClassDrawerHide: () => void;
}

const classes = [
  { id: 1, name: 'Collection 1' },
  { id: 2, name: 'Collection 2' },
  { id: 3, name: 'Collection 3' },
];

export const CreateClassDrawer = (props: Props) => {
  const { isCreateClassDrawerShow, handleCreateClassDrawerHide } = props || {};
  const [selected, setSelected] = useState(classes[0]);

  return (
    <>
      <Drawer
        isOpen={isCreateClassDrawerShow}
        onClose={handleCreateClassDrawerHide}
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
            <h2 className="text-xl font-medium leading-8">Create Class</h2>
            <span className="text-grayish font-normal leading-5">
              If you want to create Quiz please enter Quiz Title
            </span>
          </div>
          <div className="mt-8">
            <div>
              <Listbox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                  <Listbox.Button className="form-input px-4 py-3 rounded-xl border-gray-400 w-full text-grayish text-left">
                    <span className="block truncate">{selected.name}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {classes.map((currentClass, id) => (
                        <Listbox.Option
                          key={id}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? 'bg-amber-100 text-amber-900'
                                : 'text-gray-900'
                            }`
                          }
                          value={currentClass}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? 'font-medium' : 'font-normal'
                                }`}
                              >
                                {currentClass.name}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                  <HiOutlineCheck
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
              <input
                type="text"
                className="form-input px-4 py-3 rounded-xl border-gray-400 w-full mt-8"
                placeholder="please enter class title"
              />
              <button
                className="mt-10 bg-primary text-white font-semibold px-4 py-3 rounded-xl w-full"
                onClick={() => {
                  handleCreateClassDrawerHide();
                }}
              >
                Create Class
              </button>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};
