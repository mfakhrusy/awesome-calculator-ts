import * as React from 'react';

export interface UpperProps {}

export class Upper extends React.Component<UpperProps, {}> {
  render() {

    return (
      <div className="display-upper">
        <span>
          5+2-3x4
        </span>
      </div>
    )
  }
}
