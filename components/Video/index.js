/* eslint-disable jsx-a11y/media-has-caption */
import PropTypes from 'prop-types';

const Video = ({ src, caption, poster }) => (
  <figure className="mt-12">
    <video src={src} poster={poster} controls />
    <figcaption>{caption}</figcaption>
  </figure>
);

Video.propTypes = {
  src: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Video;
