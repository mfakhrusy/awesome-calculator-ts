import * as React from 'react';
import { BasicCalculator as Basic } from 'app/containers/BasicCalculator';

import './index.scss';

export interface BodyContentProps {}

export class BodyContent extends React.Component<BodyContentProps, {}> {
  render() {
    return (
      <main className="body-content">
        <div className="overlay-bg" />
        <Basic />
      </main>
    )
  }
}
