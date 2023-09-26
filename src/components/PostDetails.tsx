import Image from 'next/image';
import { PiMessengerLogoLight } from 'react-icons/pi';

import FormattedDate from '@/components/date';
import { Classes } from '@/interfaces/Classes';

interface Props {
  classes: Classes;
  index: number;
}

const PostDetails = ({ classes, index }: Props) => {
  return (
    <div className="bg-background">
      <div className="bg-white rounded-xl px-5 py-4 mt-4">
        {index % 2 === 0 && (
          <Image
            className="w-full h-full rounded-xl"
            src={'https://picsum.photos/id/20/3670/2462'}
            alt=""
            height={3670}
            width={2462}
          />
        )}
        <div className="container mx-auto">
          <div className="flex flex-col mt-6 rounded bg-white pt-3">
            <FormattedDate dateString={classes?.date} />
            <h3 className="mt-4 text-xl">{classes.title}</h3>
            <h5 className="font-light mt-4 text-sm">{classes.desc}</h5>
          </div>
          <hr className="h-px my-4 bg-gray-100 border-0 dark:bg-gray-200"></hr>
        </div>

        <div className="flex justify-between">
          <div className="flex ">
            <div className="mr-2.5">
              <Image
                className="inline-block h-6 w-6 rounded-md"
                src={classes?.images ? '' + classes?.images : ''}
                alt=""
                height={50}
                width={10}
              />
            </div>
            <div className="text-grayish">{classes.teacherName}</div>
          </div>
          <div className="flex items-center">
            <PiMessengerLogoLight className="mr-1 text-grayish" />
            <div className="text-grayish">{classes.comments}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
