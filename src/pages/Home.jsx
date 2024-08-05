import { useTranslation } from "react-i18next";
import PrimaryBtn from "../compenents/buttons/PrimaryBtn";
import { GiPayMoney, GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";
import TransactionCard from "../compenents/transactionCard/transactionCard";

const Home = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="p-3 space-y-3">
      <h2 className="text-xl md:text-3xl font-bold text-custom-orange font-archivo-black">
        {t("home.balance")} <br /> <span className="text-6xl">40</span>{" "}
        {t("home.taka")}
      </h2>
      <div className=" flex flex-col md:flex-row  gap-2 py-5">
        <PrimaryBtn text={t("home.sendMoney")} icon={GiPayMoney} />
        <PrimaryBtn text={t("home.requestMoney")} icon={GiReceiveMoney} />
        <PrimaryBtn text={t("home.withdrawMoney")} icon={GiTakeMyMoney} />
      </div>
      <div className="relative">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl md:text-3xl font-bold text-custom-orange font-archivo-black">
            {t("home.transactions")}
          </h2>
          <h2 className="font-bold transition duration-500 ease-in-out hover:text-custom-orange btn btn-ghost">
            See All
          </h2>
        </div>
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-custom-gray to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default Home;
