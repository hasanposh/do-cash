import PropTypes from "prop-types";
const PrimaryBtn = ({ text, icon: Icon }) => {
  return (
    <button className="group relative h-12 w-48 overflow-hidden rounded-full bg-white text-lg shadow flex items-center justify-center space-x-2">
      <div className="absolute inset-0 w-5 bg-custom-orange transition-all duration-[250ms] ease-out group-hover:w-full"></div>
      <span className="relative text-black group-hover:text-white flex items-center space-x-2">
        {text}
        <Icon className="ml-1 text-2xl" />
      </span>
    </button>
  );
};

export default PrimaryBtn;

PrimaryBtn.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
};
