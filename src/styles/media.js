import { css } from 'styled-components';

const sizes = {
  max: 1200,
  large: 992,
  medium: 768,
  small: 480,
};

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export default media;
