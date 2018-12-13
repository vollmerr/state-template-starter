import React from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Button, ErrorSection, LoadingSection } from 'state-template';

import Page from '../../components/Page';
import List from '../../components/List';

import * as actions from './actions';
import * as selectors from './selectors';

// This is an example home page that shows how to use
// redux and local state management
export class LoadingData extends React.PureComponent {
  state = { page: 1 }

  componentDidMount() {
    const { exampleData } = this.props;

    if (!exampleData.length) {
      this.getNextData({})();
    }
  }

  getNextData = ({ withDelay, withError }) => () => {
    const { getExampleData } = this.props;
    const { page } = this.state;
    // fetch the next set of data based off the local page number
    // our 'getExampleData' saga will trigger when this action is dispatched
    getExampleData({ page, withDelay, withError });
    // update local state to new page number (this
    // could also be in redux, but here for example)
    this.setState({ page: page + 1 });
  }

  clearData = () => {
    const { clearExampleData } = this.props;
    // reset in redux store
    clearExampleData();
    // reset page number locally
    this.setState({ page: 1 });
  }

  renderButtons = () => {
    const { exampleData } = this.props;
    const isDisabled = !exampleData.length;

    return (
      <div className={'btn-row'}>
        <Button onClick={this.getNextData({})} text={'Load Next Data'} variant={'primary'} />
        <Button onClick={this.getNextData({ withDelay: true })} text={'Delayed'} variant={'default'} />
        <Button onClick={this.getNextData({ withError: true })} text={'Throw Error'} variant={'standout'} />
        <Button onClick={this.clearData} text={'Clear Data'} disabled={isDisabled} variant={'highlight'} />
      </div>
    );
  }

  render() {
    const { exampleData } = this.props;
    const errorBtnProps = {
      variant: 'highlight',
      onClick: this.clearData,
      text: 'Let`s try that again...',
    };

    return (
      <Page>
        <ErrorSection btnProps={errorBtnProps}>
          <h1>Example of Loading Data</h1>
          <List data={exampleData} />
          <LoadingSection />
          {this.renderButtons()}
        </ErrorSection>
      </Page>
    );
  }
}

LoadingData.propTypes = {
  exampleData: T.array.isRequired,
  getExampleData: T.func.isRequired,
  clearExampleData: T.func.isRequired,
};

// map the pieces of the redux state we want to use
export const mapStateToProps = createStructuredSelector({
  // these will get put into this.props.exampleData, and update any time there is a change
  exampleData: selectors.getExampleData(),
});

// map the actions we want to dispatch into redux
export const mapDispatchToProps = dispatch => ({
  // this will get put into this.props.getExampleData
  getExampleData: props => dispatch(actions.getExampleDataRequest(props)),
  clearExampleData: () => dispatch(actions.clearExampleData()),
});

// connect to redux, allowing sending actions and reciving data from it
const withRedux = connect(mapStateToProps, mapDispatchToProps);

export default withRedux(LoadingData);
