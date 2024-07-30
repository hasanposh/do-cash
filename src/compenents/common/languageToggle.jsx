import { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const [t, i18n] = useTranslation("global");

  const [isChecked, setIsChecked] = useState(true);

  const handleClick = () => {
    setIsChecked(!isChecked);
    !isChecked ? i18n.changeLanguage("en") : i18n.changeLanguage("bn");
  };
  return (
    <label className="flex items-center relative w-max cursor-pointer select-none">
      <span className="text-lg font-bold mr-3">{t("header.language")}</span>
      <input
        type="checkbox"
        className="sr-only peer"
        checked={isChecked}
        onChange={handleClick}
      />
      <div
        className={`w-14 h-7 flex items-center ${
          isChecked ? "bg-green-700" : "bg-custom-orange"
        } rounded-full p-1 transition-colors duration-300`}
      >
        <div
          className={`bg-gray-200 w-5 h-5 rounded-full shadow-md transform ${
            isChecked ? "translate-x-7" : ""
          } transition-transform duration-300`}
        ></div>
      </div>
      <span
        className={`absolute font-medium text-xs uppercase right-1 text-white ${
          isChecked ? "hidden" : ""
        }`}
      >
        EN
      </span>
      <span
        className={`absolute font-medium text-xs uppercase right-8 text-white ${
          isChecked ? "" : "hidden"
        }`}
      >
        বাং
      </span>
    </label>
  );
};

export default LanguageToggle;
