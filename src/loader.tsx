import React from 'react';
import './loader.css';

interface LoaderProps {}

const Loader: React.FC<LoaderProps> = () => {
  return (
    <div>
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
