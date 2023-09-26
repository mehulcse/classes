import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { PiMessengerLogoLight } from 'react-icons/pi';

import FormattedDate from '@/components/date';
import Header from '@/components/header';
import { Navigation } from '@/components/navigation';
import { Classes } from '@/interfaces/Classes';

interface Props {
  classes: Classes[];
}

export default function Home({ classes }: Props) {
  const router = useRouter();

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
      <Navigation />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch('http://localhost:3000/api/classes');
  const classes = await res.json();

  return {
    props: { classes },
  };
};