// @import dependencies
import React, { CSSProperties } from 'react';
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
import './NotFoundScreen.scss';
// @end styles

interface INotFoundScreenProps {
  className?: string;
  style?: CSSProperties;
  id?: string;
}

const NotFoundScreen: React.FC<INotFoundScreenProps> = (props) => {
  return (
    <div
      className={`not_found_page-layout ${
        props.className ? props.className : ''
      }`}
      style={props.style}
      id={props.id}
    >
      <p>{'Pagina no encontrada :('}</p>
    </div>
  );
};

export default NotFoundScreen;
