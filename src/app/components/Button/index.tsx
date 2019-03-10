import * as React from 'react';

import './index.scss';

export interface ButtonProps {
  children: React.ReactNode
}

export class Button extends React.Component<ButtonProps, {}> {
  render() {
    const{ children } = this.props;

    return (
      <div className="button">
        {children}
      </div>
    )
  }
}
