import * as React from 'react';
import { MathSymbol } from './MathSymbol';
import { Numbers } from './Numbers';

import './index.scss';

export interface BasicBodyProps {}

export class BasicBody extends React.Component<BasicBodyProps, {}> {
  render() {
    return (
      <div className="basic-body">
        <MathSymbol />
        <Numbers />
      </div>
    )
  }
}
