import { useTranslation } from "react-i18next";
import { GoArrowDown, GoArrowUp } from "react-icons/go";
import PrimaryBtn from "../compenents/buttons/PrimaryBtn";
import { GiTakeMyMoney } from "react-icons/gi";

const Home = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="p-3 space-y-3">
      <h2 className="text-6xl font-bold text-custom-orange">
        {t("home.balance")} <br /> 40 {t("home.taka")}
      </h2>
      <div className=" flex gap-2 py-5">
      <PrimaryBtn text={t('home.sendMoney')} icon={GoArrowUp} />
      <PrimaryBtn text={t('home.requestMoney')} icon={GoArrowDown} />
      <PrimaryBtn text={t('home.withdrawMoney')} icon={GiTakeMyMoney} />
      </div>
    </div>
  );
};

export default Home;
