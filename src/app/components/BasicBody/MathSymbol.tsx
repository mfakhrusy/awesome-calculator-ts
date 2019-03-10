import * as React from 'react';
import { Button } from 'app/components/Button';

import iconAdd from 'assets/img/svg/icon-add.svg';
import iconMuliply from 'assets/img/svg/icon-multiply.svg';
import iconDivide from 'assets/img/svg/icon-divide.svg';
import iconPlusMinus from 'assets/img/svg/icon-plus-minus.svg';
import iconMinus from 'assets/img/svg/icon-minus.svg';
import iconEqual from 'assets/img/svg/icon-equal.svg';
import iconBack from 'assets/img/svg/icon-backspace-arrow.svg';

import './index.scss';

export interface MathSymbolProps {}

export class MathSymbol extends React.Component<MathSymbolProps, {}> {
  render() {
    return (
      <React.Fragment>
        <div className="grid-item button-back">
          <Button>
            <img src={iconBack} alt="backspace-arrow" />
          </Button>
        </div>
        <div className="grid-item button-plus-minus">
          <Button>
            <img src={iconPlusMinus} alt="plus-minus" />
          </Button>
        </div>
        <div className="grid-item button-division">
          <Button>
            <img src={iconDivide} alt="divide" />
          </Button>
        </div>
        <div className="grid-item button-multiply">
          <Button>
            <img src={iconMuliply} alt="multiply" />
          </Button>
        </div>
        <div className="grid-item button-minus">
          <Button>
            <img src={iconMinus} alt="minus" />
          </Button>
        </div>
        <div className="grid-item button-plus">
          <Button>
            <img src={iconAdd} alt="add" />
          </Button>
        </div>
        <div className="grid-item button-equal">
          <Button>
            <img src={iconEqual} alt="equal" />
          </Button>
        </div>
      </React.Fragment>
    )
  }
}
