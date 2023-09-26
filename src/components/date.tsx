import { BsClock } from 'react-icons/bs';

import { formatDateFromString } from '@/utils/date-formatter';

const FormattedDate = ({ dateString }: { dateString: string }) => {
  return (
    <div className="flex items-center">
      <BsClock className="mr-2 text-grayish" />
      <time className="text-grayish" dateTime={dateString}>
        {formatDateFromString(dateString)}
      </time>
    </div>
  );
};

export default FormattedDate;
