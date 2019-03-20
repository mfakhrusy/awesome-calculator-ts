import * as React from 'react';
// import { connect } from 'react-redux';
import { Upper } from './Upper';
import { ConnectedLower } from './Lower';

import './index.scss';

export interface DisplayProps { type: string; }

export class Display extends React.Component<DisplayProps, {}> {
  render() {
    const { type } = this.props;

    return (
      <div className={`calculator-display display-${type}`}>
        <Upper />
        <ConnectedLower result={0} />
      </div>
    )
  }
}
