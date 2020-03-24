import React from 'react';

function Grid({config, children}) {

  return (
    <section data-uk-grid className={config}>
      {children}
    </section>
  )
}

export default Grid;
