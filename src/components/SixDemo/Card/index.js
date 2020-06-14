import PropTypes from 'prop-types';
import Card from '../../Card';

const DemoCard = ({ theme, text, onClick }) => (
  <Card theme={theme}>
    <div className="text-center">
      <h4>Dee Littel</h4>
      <p className="text-sm mb-6">Global Mobility Liaison</p>
    </div>
    <button
      onClick={onClick}
      style={{ background: theme.tertiary, color: theme.primary }}
      type="button"
      className="rounded-lg py-2 px-6 bg-blue-100 transition-colors duration-300"
    >
      New Theme
    </button>
    <div
      style={{ borderColor: theme.secondary }}
      className="border-t pt-6 mt-8 transition-colors duration-300"
    >
      <ul className="text-base">
        <li>North Mabelle, CL</li>
        <li>545.879.1265</li>
        <li>dee.littel@concrooks.com</li>
      </ul>
    </div>
    <div
      style={{ borderColor: theme.secondary }}
      className="border-t pt-6 mt-8 transition-colors duration-300"
    >
      <p className="text-base" style={{ color: theme.tertiary }}>{text}</p>
    </div>
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
