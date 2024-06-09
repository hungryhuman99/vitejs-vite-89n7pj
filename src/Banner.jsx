import React from 'react';
import PropTypes from 'prop-types';

// ImageSection component
function ImageSection({ images, speed }) {
  const imagesStyle = {
    animation: `swipe ${speed}ms linear infinite`,
  };

  return (
    <div className='images' style={imagesStyle}>
      {images.map(({ src, name }) => (
        <div className='image' key={src}>
          <img src={src} alt={name} />
        </div>
      ))}
    </div>
  );
}

// PropTypes for ImageSection
// ImageSection.propTypes = {
//   images: PropTypes.arrayOf(
//     PropTypes.shape({
//       src: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   speed: PropTypes.number.isRequired,
// };

// Banner component
function Banner({ images, speed }) {
  return (
    <div className='banner-wrapper'>
      <div className='wrapper'>
        <ImageSection images={images} speed={speed} />
        <ImageSection images={images} speed={speed} />
      </div>
    </div>
  );
}

// PropTypes for Banner

// Banner.propTypes = {
//   images: PropTypes.arrayOf(
//     PropTypes.shape({
//       src: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   speed: PropTypes.number.isRequired,
// };



export default Banner;
