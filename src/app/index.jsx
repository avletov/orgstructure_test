import React, { Component } from 'react';

import { Wrapper, Table, Head, Body, Row, Cell } from './styles';
import { makeTree, getRemark } from './utils';
import * as data from '../data/orgstructure.json';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  componentDidMount = () => {
    this.setData(data.default);
  }

  setData = (data) => {
    this.setState(state => state.data = makeTree(data));
  }

  renderStructure = (data, significant = 1) => {
    return data.map(({ type, name, children }, i) => {
      if (type) {
        return (
          <React.Fragment key={type + i}>
            <Row significant={significant}>
              <Cell>{type}</Cell>
              <Cell>{name} {getRemark(children, significant)}</Cell>
            </Row>
            {(children && children.length !== 0) ? this.renderStructure(children, significant + 1) : null}
          </React.Fragment>
        );
      }
    });
  }

  render() {
    const { data } = this.state;

    return (
      <Wrapper>
        <Table>
          <Head>
            <Row>
              <Cell width={100}>Тип</Cell>
              <Cell width={500}>Имя</Cell>
            </Row>
          </Head>
          <Body>
            {data ? this.renderStructure(data) : null}
          </Body>
        </Table>
      </Wrapper>
    );
  }
}
