import axios from 'axios';
import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

class App extends Component {

  handleStatus() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/`)
      .then(res => {
        this.setState({
        "ok": "state"}, () => {
        console.log('시작');
        this.props.history.push('/');
  });
})
.catch(err => console.log(err));
}
}
export default withRouter(App);