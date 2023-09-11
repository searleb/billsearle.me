import { Card } from "components/Card";
import PropTypes from "prop-types";

const DemoCard = ({ theme, text, onClick }) => (
  <Card theme={theme}>
    <div className="text-center">
      <h4>Dee Littel</h4>
      <p className="mb-6 text-sm">Global Mobility Liaison</p>
    </div>
    <button
      onClick={onClick}
      style={{ background: theme.tertiary, color: theme.primary }}
      type="button"
      className="px-6 py-2 transition-all duration-300 transform bg-blue-100 rounded-lg hover:shadow-lg"
    >
      New Theme
    </button>

    <hr
      style={{ borderColor: theme.secondary }}
      className="my-8 transition-colors duration-300"
    />

    <ul className="text-base">
      <li>North Mabelle, CL</li>
      <li>545.879.1265</li>
      <li>dee.littel@concrooks.com</li>
    </ul>

    <hr
      style={{ borderColor: theme.secondary }}
      className="my-8 transition-colors duration-300"
    />

    <p className="h-12 text-base" style={{ color: theme.tertiary }}>
      {text}
    </p>
  </Card>
);

DemoCard.propTypes = {
  theme: PropTypes.shape({
    primary: PropTypes.string.isRequired,
    secondary: PropTypes.string.isRequired,
    tertiary: PropTypes.string.isRequired,
  }).isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DemoCard;
