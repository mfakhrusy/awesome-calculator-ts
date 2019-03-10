import * as React from 'react';
import { BodyContent } from 'app/containers/BodyContent';

import './index.scss';

export interface AppWrapperProps {}

export class AppWrapper extends React.Component<AppWrapperProps, {}> {
  render() {
    return (
      <BodyContent />
    )
  }
}
