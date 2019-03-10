import * as React from 'react';

import './index.scss';

export interface DisplayProps { type: string; }

export class Display extends React.Component<DisplayProps, {}> {
  render() {
    const { type } = this.props;

    return (
      <div className={`calculator-display display-${type}`}>
        <div className="upper">
          <span>
            5+2-3x4
          </span>
        </div>
        <div className="lower">
          <span>
            16
          </span>
        </div>
      </div>
    )
  }
}
