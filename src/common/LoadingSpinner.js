import React from 'react';

const LoadingSpinner = (props) => {
  return (
    <div id="loading_container">
      <div className="loader">
        <span className="spinner one"></span>
        <span className="spinner two"></span>
        <span className="spinner three"></span>
        <br/>
        <span className="loader-text">LOADING...</span>
      </div>
    </div>
  );
}

export default LoadingSpinner;
