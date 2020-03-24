import React from 'react';

function DetailImg({img, title, className}) {
  return (
    <img src={img} alt={title} className={`detailImg ${className}`} data-uk-img/>
  )
}

export default DetailImg;
