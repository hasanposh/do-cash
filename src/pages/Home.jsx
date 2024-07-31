import { useTranslation } from "react-i18next";
import { GoArrowUp } from "react-icons/go";
import PrimaryBtn from "../compenents/buttons/PrimaryBtn";

const Home = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="p-3 space-y-3">
      <h2 className="text-6xl font-bold text-custom-orange">
        {t("home.balance")} <br /> 40 {t("home.taka")}
      </h2>
      <PrimaryBtn text={t('home.sendMoney')} icon={GoArrowUp} />
    </div>
  );
};

export default Home;
