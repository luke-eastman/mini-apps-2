import React from 'react';

const Result = ({result}) => {
  return (
    <div>
      <h3>{`Date: ${result.date}`}</h3>
      <p>{result.description}</p>
    </div>
  );
}

export default Result;