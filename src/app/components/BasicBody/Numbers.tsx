import * as React from 'react';
import { Button } from 'app/components/Button';

import './index.scss';

export interface NumbersProps {}

export class Numbers extends React.Component<NumbersProps, {}> {
  render() {
    return (
      <React.Fragment>
        <div className="grid-item number button-0">
          <Button>
            0
          </Button>
        </div>
        <div className="grid-item number button-1">
          <Button>
            1
          </Button>
        </div>
        <div className="grid-item number button-2">
          <Button>
            2
          </Button>
        </div>
        <div className="grid-item number button-3">
          <Button>
            3
          </Button>
        </div>
        <div className="grid-item number button-4">
          <Button>
            4
          </Button>
        </div>
        <div className="grid-item number button-5">
          <Button>
            5
          </Button>
        </div>
        <div className="grid-item number button-6">
          <Button>
            6
          </Button>
        </div>
        <div className="grid-item number button-7">
          <Button>
            7
          </Button>
        </div>
        <div className="grid-item number button-8">
          <Button>
            8
          </Button>
        </div>
        <div className="grid-item number button-9">
          <Button>
            9
          </Button>
        </div>
      </React.Fragment>
    )
  }
}

