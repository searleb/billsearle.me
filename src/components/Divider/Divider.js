import { ColorContext } from "context/color";
import PropTypes from "prop-types";
import { useContext } from "react";

const Divider = ({ className }) => {
  const { color } = useContext(ColorContext);
  return (
    <div
      className={`border-b-2 transition-colors duration-700 my-4 ${className}`}
      style={{ borderBottomColor: color }}
    />
  );
};

Divider.propTypes = {
  className: PropTypes.string,
};

Divider.defaultProps = {
  className: "",
};

export default Divider;
