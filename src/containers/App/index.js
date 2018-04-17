import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions';
import './App.css';

class App extends Component {
  componentDidMount() {
    console.log(process.env);
  }

  render() {
    return (
      <div className="App">
        {JSON.stringify(this.props.state)}
        <button onClick={() => this.props.actions.fetchData()}>
          Fetch data
        </button>
      </div>
    );
  }
}

// bind redux to App component
const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
