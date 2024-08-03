import { GoArrowDown } from "react-icons/go";

const TransactionCard = () => {
  return (
    <div className="flex justify-between hover:bg-custom-orange p-4 rounded-lg group cursor-pointer transition duration-500 ease-in-out">
    <div className="flex">
      <div className="rounded-full bg-neutral-400 group-hover:bg-white p-4 mr-4">
        <GoArrowDown className="text-2xl" />
      </div>
      <div>
        <h2 className="text-2xl font-semibold group-hover:text-white">Md. Shakib Khan</h2>
        <h2 className="font-medium group-hover:text-white">Sending</h2>
      </div>
    </div>
    <h2 className="text-2xl font-semibold group-hover:text-white">40 tk</h2>
  </div>
  
  );
};

export default TransactionCard;
