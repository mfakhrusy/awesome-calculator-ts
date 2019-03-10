import * as React from 'react';
import { Display } from 'app/components/Display';
import { BasicBody as Body } from 'app/components/BasicBody';

import './index.scss';

export interface BasicCalculatorProps {}

export class BasicCalculator extends React.Component<BasicCalculatorProps, {}> {
  render() {
    return (
      <div className="calculator">
        <div className="content">
          <Display type="basic" />
          <Body />
        </div>
      </div>
    );
  }
}
