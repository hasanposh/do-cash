import  { useState } from 'react';
import {
  FaPersonArrowDownToLine,
  FaPersonArrowUpFromLine,
} from 'react-icons/fa6';

const TransactionCard = () => {
  const [isClicked, setIsClicked] = useState(false);
  const operation = 'send';

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200); // Reset the click effect after 200ms
  };

  return (
    <div
      onClick={handleClick}
      className={`flex justify-between p-4 rounded-lg group cursor-pointer transition duration-500 ease-in-out ${
        isClicked ? 'bg-orange-500' : 'hover:bg-custom-orange'
      }`}
    >
      <div className="flex">
        <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-neutral-400 group-hover:bg-white mr-4">
          {operation === 'send' ? (
            <FaPersonArrowUpFromLine className="text-2xl" />
          ) : (
            <FaPersonArrowDownToLine className="text-2xl" />
          )}
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold group-hover:text-white">
            Md. Shakib Khan
          </h2>
          <h2 className="font-medium group-hover:text-white">Sending</h2>
        </div>
      </div>
      <h2 className="text-xl sm:text-2xl font-semibold group-hover:text-white">40 tk</h2>
    </div>
  );
};

export default TransactionCard;
