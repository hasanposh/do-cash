import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const SideBarNavItems = ({ text, icon: Icon }) => {
  return (
    <NavLink className=" w-full flex flex-col md:flex-row md:gap-4 items-center text-sm font-semibold px-4 py-2 rounded-full hover:bg-white transition duration-500 ease-in-out">
      <Icon className="text-2xl" />
      {text}
    </NavLink>
  );
};

SideBarNavItems.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
};

export default SideBarNavItems;
