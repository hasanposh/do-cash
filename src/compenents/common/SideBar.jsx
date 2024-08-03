import { IoHomeOutline } from "react-icons/io5";
import SideBarNavItems from "../SideBarNavItems/SideBarNavItems";
import { BsPeople } from "react-icons/bs";
import { TfiReload } from "react-icons/tfi";
import { useTranslation } from "react-i18next";

const SideBar = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="md:w-80 text-custom-orange ">
      <div className="flex flex-1 overflow-y-auto">
        <nav className="flex flex-row md:flex-col justify-between flex-1 px-2 gap-4">
          <SideBarNavItems icon={IoHomeOutline} text={t('sideBar.home')} />
          <SideBarNavItems icon={BsPeople} text={t('sideBar.recipients')} />
          <SideBarNavItems icon={TfiReload} text={t('sideBar.transactions')} />
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
