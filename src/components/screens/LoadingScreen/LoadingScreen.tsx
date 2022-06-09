import React from 'react';
import { ScaleLoader } from 'react-spinners';

import './LoadingScreen.scss';

export interface LoadingPageProps {
  history?: any;
  path?: string;
}

const LoadingScreen: React.FC<LoadingPageProps> = (props) => {
  return (
    <div className="loading_page-layout">
      <ScaleLoader
        color="var(--primary)"
        margin={6}
        width={8}
        radius={6}
        height={35}
      />
    </div>
  );
};

export default LoadingScreen;
