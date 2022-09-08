import React from 'react';
import "./Loading.css"

/** Loading spinner component. */
function Loading() {
  return (
    <>
      <div className="spinner-border" role="status"></div>
      <div className="sr-only">Loading...</div>
    </>
  );
}

export default Loading;