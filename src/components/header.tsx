import { RiMenu4Fill, RiNotificationFill } from 'react-icons/ri';

const Header = () => {
  return (
    <header className="py-4 px-4 sticky top-0 bg-white">
      <div className="container mx-auto flex justify-between items-center">
        <RiMenu4Fill className="text-xl" />
        <h1 className="text-[20px] font-medium">App Name</h1>
        <RiNotificationFill className="text-primary text-xl" />
      </div>
    </header>
  );
};

export default Header;
