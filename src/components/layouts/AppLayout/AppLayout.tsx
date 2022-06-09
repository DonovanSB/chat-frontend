// @import dependencies
import React, { CSSProperties } from 'react';
// @end dependencies

// @import components
import HeaderModule from 'components/modules/HeaderModule/HeaderModule';
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
import './AppLayout.scss';
// @end styles

interface IAppLayoutProps {
  children?: any;
  history?: any;
  className?: string;
  style?: CSSProperties;
  id?: string;
  title?: string;
}

const AppLayout: React.FC<IAppLayoutProps> = (props) => {
  return (
    <div
      className={`app_layout-layout ${props.className ? props.className : ''}`}
      style={props.style}
      id={props.id}
    >
      <div className="content-page">
        <HeaderModule title={props.title} />
        <div className="container-children-app-layout">{props.children}</div>
      </div>
    </div>
  );
};

export default AppLayout;
