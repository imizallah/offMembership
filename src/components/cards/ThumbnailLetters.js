import React from 'react';
import classnames from 'classnames';

const ThumbnailLetters = ({ text, color, className, rounded, small,style }) => {
  let letters = '';
  if (text.indexOf(' ') > -1) {
    text.split(' ').map((word) => {
      if (word.length > 1) letters += word.slice(0, 1);
      return '';
    });
  } else {
    letters += text.slice(0, 3);
  }

  if (letters.length > 2) {
    letters = letters.slice(0, 3);
  }

  return (
    <div
    style={style}
      className={`align-self-center list-thumbnail-letters ${
        color ? `btn-${color}` : ''
      }  ${className}  ${classnames({
        'rounded-circle': rounded,
        small,
      })}`}
      title={text}
    >
      {letters}
    </div>
  );
};

export default React.memo(ThumbnailLetters);
