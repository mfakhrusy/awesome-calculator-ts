import * as React from 'react';
import { connect } from 'react-redux';
import { ScreenResult } from 'app/models/ScreenResultModel';
import { RootState } from 'app/reducers/state';

interface IDispatchProps {}

type IStateProps = Pick<ScreenResult, 'result'>;

type IComponentProps = ScreenResult & IStateProps & IDispatchProps;

class Lower extends React.Component<IComponentProps, {}> {
  render() {

    const { result } = this.props;

    return (
      <div className="display-lower">
        <span>
          {result}
        </span>
      </div>
    )
  }
}

const mapStateToProps = (state: RootState): ScreenResult => {
  return {
    result: state.result,
  }
}

export const ConnectedLower = connect<IStateProps, {}, ScreenResult, {}>(mapStateToProps)(Lower);
