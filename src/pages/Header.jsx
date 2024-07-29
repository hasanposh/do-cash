import { useTranslation } from "react-i18next";

const Header = () => {
  const [t, i18n] = useTranslation("global");
  const handleLanguage = (lang) => {
    i18n.changeLanguage(lang);
    // localStorage.setItem('i18nextLng', lang);  // Store the selected language in local storage.  // This can be used to persist the language across different sessions.  // You may need to use a library like 'react-use-persisted-state' to achieve this.  // Also, make sure to clean up the localStorage after changing the language to avoid storing unnecessary data.  // Also, remember to handle potential errors related to language changes.  // For example, if the selected language is not supported, you might want to display an error message.  // You can use the 'i18next-xhr-backend' library for this purpose.  // Also, make sure to handle the case where the user's browser language is not supported by your application.  // You can use the 'i18next-browser-languagedetector' library for this purpose.  // Also, remember to
  };
  return (
    <div>
      <h1>{t("header.message")}</h1>
      <button onClick={() => handleLanguage("en")}>EN</button>
      <button onClick={() => handleLanguage("bn")}>BN</button>
    </div>
  );
};

export default Header;
