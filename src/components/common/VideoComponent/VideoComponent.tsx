// @import dependencies
import React, { CSSProperties } from 'react';
import Youtube from 'react-youtube';
// @end dependencies

// @import components
// @end components

// @import types
// @end types

// @import services
// @end services

// @import hooks
// @end hooks

// @import actions
// @end actions

// @import utils
// @end utils

// @import assets
// @end assets

// @import styles
import './VideoComponent.scss';
// @end styles

// @import types
// @end types

interface IVideoComponentProps {
  id: string;
  platform: 'YouTube';
  className?: string;
  style?: CSSProperties;
}

const VideoComponent: React.FC<IVideoComponentProps> = (props) => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div
      className={`video_component-layout ${
        props.className ? props.className : ''
      }`}
      style={props.style}
    >
      {props.platform === 'YouTube' ? (
        <Youtube videoId={props.id} opts={opts} />
      ) : null}
    </div>
  );
};

export default VideoComponent;
