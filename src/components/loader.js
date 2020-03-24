import React from 'react';

function Loader({text, textColor, iconColor}) {
  return (
    <div className="loader">
      <p className="loader__text" style={{color: textColor}}>
        {text} <span className="fas fa-spinner fa-spin" style={{color: iconColor}}/>
      </p>
    </div>
  )
}

export default Loader;
