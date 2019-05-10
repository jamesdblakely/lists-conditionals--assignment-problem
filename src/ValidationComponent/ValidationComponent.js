import React from 'react';

const ValidationComponent = (props) => {

  return (
    <div>
      <p>{props.length <= 5 ? "Text too short" : "Text long enough"}</p>

    </div>
    );
}

export default ValidationComponent;
