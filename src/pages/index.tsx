import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useCallback, useMemo, useState } from 'react';
import { PiMessengerLogoLight } from 'react-icons/pi';
import {
  RiAddBoxFill,
  RiHomeFill,
  RiMoreFill,
  RiSparklingFill,
} from 'react-icons/ri';

import FormattedDate from '@/components/date';
import { CreateClassDrawer } from '@/components/drawers/CreateClassDrawer';
import { JoinClassDrawer } from '@/components/drawers/JoinClassDrawer';
import Header from '@/components/header';
import { Navigation } from '@/components/navigation';
import { Classes } from '@/interfaces/Classes';

interface Props {
  classes: Classes[];
}

export default function Home({ classes }: Props) {
  const router = useRouter();
  const [isJoinClassDrawerShow, setJoinClassDrawerShow] = useState(false);
  const [isCreateClassDrawerShow, setCreateClassDrawerShow] = useState(false);
  const handleJoinClassDrawerShow = useCallback(() => {
    setJoinClassDrawerShow(true);
  }, []);

  const handleJoinClassDrawerHide = useCallback(() => {
    setJoinClassDrawerShow(false);
  }, []);

  const handleCreateClassDrawerShow = useCallback(() => {
    setCreateClassDrawerShow(true);
  }, []);

  const handleCreateClassDrawerHide = useCallback(() => {
    setCreateClassDrawerShow(false);
  }, []);

  const menuOptions = useMemo(
    () => [
      {
        icon: <RiHomeFill className="text-xl" />,
        title: 'Groups',
        id: 'groups',
      },
      {
        icon: <RiSparklingFill className="text-xl" />,
        title: 'Join',
        onClick: () => {
          handleJoinClassDrawerShow();
        },
        id: 'join',
      },
      {
        icon: <RiAddBoxFill className="text-xl" />,
        title: 'Create',
        id: 'create',
        onClick: () => {
          handleCreateClassDrawerShow();
        },
      },
      {
        icon: <RiMoreFill className="text-xl" />,
        title: 'More',
        id: 'more',
      },
    ],
    [handleCreateClassDrawerShow, handleJoinClassDrawerShow]
  );

  return (
    <div>
      <Header />
      <div className="bg-background">
        <div className="py-2 px-4 container mx-auto">
          <div className="container mx-auto">
            {classes.map((item) => (
              <div
                className="flex my-6 flex-col md:flex-row rounded-xl bg-white p-6 md:justify-between md:items-center cursor-pointer"
                key={item.id}
                onClick={() => router.push(`/class-details/${item.slug}`)}
              >
                <div className="flex flex-col">
                  <h3 className="text-lg mb-4 font-medium">{item.title}</h3>
                  <FormattedDate dateString={item?.date} />
                </div>
                <div className="flex justify-between items-center mt-4 md:mt-0">
                  <div className="flex -space-x-1 overflow-hidden md:mr-4">
                    {item?.images?.map((img, index) => {
                      return (
                        <Image
                          key={index}
                          src={img ?? ''}
                          width={50}
                          height={10}
                          alt={``}
                          className="h-7 rounded-lg border-l w-7 border-2 border-avatarBorder"
                        />
                      );
                    })}

                    <div className="h-7 rounded-lg border-2 border-avatarBorder w-7 bg-primary text-xs flex justify-center items-center text-white">
                      9+
                    </div>
                  </div>
                  <div className="flex items-center text-grayish">
                    <PiMessengerLogoLight className="mr-1 text-grayish" />
                    {item?.comments}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Navigation menuOptions={menuOptions} />
      <JoinClassDrawer
        isJoinClassDrawerShow={isJoinClassDrawerShow}
        handleJoinClassDrawerHide={handleJoinClassDrawerHide}
      />
      <CreateClassDrawer
        isCreateClassDrawerShow={isCreateClassDrawerShow}
        handleCreateClassDrawerHide={handleCreateClassDrawerHide}
      />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let classes = [];
  try {
    const resp = await fetch(
      'https://run.mocky.io/v3/31a43aef-8202-4a6f-9943-68dac42ae8c0'
    );
    classes = await resp.json();
  } catch (error) {
    console.error(error);
  }

  return {
    props: { classes },
  };
};
