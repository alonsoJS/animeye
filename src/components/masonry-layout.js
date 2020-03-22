import React from 'react';

function MasonryLayout ({config, children}) {
  return (
    <div data-uk-grid="masonry: true" className={config}>
      {children}
    </div>
  )
}

export default MasonryLayout;
