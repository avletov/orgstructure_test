import React, { Component } from 'react';

import { Wrapper } from './styles';
import { loadJSON } from './utils';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  componentDidMount = () => {
    loadJSON('orgstructure.json', this.setData);
  }

  setData = (data) => {
    this.setState(state => { state.data = data });
  }

  render() {
    return (
      <Wrapper>
      </Wrapper>
    );
  }
}
