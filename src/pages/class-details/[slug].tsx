import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { BsArrowLeft, BsFilter, BsSearch } from 'react-icons/bs';
import { FaPlus } from 'react-icons/fa';

import { NewPostNavigation } from '@/components/NewPostNavigation';
import PostDetails from '@/components/PostDetails';
import Button from '@/components/button';
import { Classes } from '@/interfaces/Classes';

interface Props {
  selectedClass: Classes;
}

const ClassDetails = ({ selectedClass }: Props) => {
  const router = useRouter();

  return (
    <div className="bg-background">
      <header className="py-4 bg-white w-full px-4 sticky top-0 ">
        <div className="container mx-auto flex justify-between items-center">
          <Button
            color="secondary"
            variant="link"
            onClick={() => router.back()}
            className="!px-0"
          >
            <BsArrowLeft size={22} />
          </Button>
          <h1>{selectedClass?.title}</h1>
          <BsSearch size={22} />
        </div>
      </header>
      <div className="p-4 md:px-0 container mx-auto">
        <div className="flex space-x-4">
          <Button variant="contained" color="primary" className="!flex !gap-2">
            <FaPlus className="mr-2 text-white" />
            New Post
          </Button>
          <Button variant="contained" color="primary" className="!flex !gap-2">
            <BsFilter /> Filter
          </Button>
        </div>
        {Array(10)
          .fill('_')
          .map((_, index) => (
            <PostDetails key={index} index={index} classes={selectedClass} />
          ))}
      </div>
      <NewPostNavigation />
    </div>
  );
};

export default ClassDetails;

export const getServerSideProps: GetServerSideProps = async (context) => {
  let selectedClass = {};
  const { slug } = context.query;
  try {
    const resp = await fetch(
      'https://run.mocky.io/v3/31a43aef-8202-4a6f-9943-68dac42ae8c0'
    );
    const jsonData = await resp.json();
    selectedClass = jsonData.find((detail: any) => detail.slug === slug);
  } catch (error) {
    console.error(error);
  }
  return {
    props: { selectedClass },
  };
};
