//I, Bobby Filippopoulos, 000338236 verify that this is my work and only my work
import React, { Component } from "react";
import Header from './common/Header';
import Styled from "styled-components";

const StyledDiv = Styled.div`
  margin: 0;
  padding: 0;
`;

class App extends Component {
  render() {
    return (
      <StyledDiv>
        <Header />
        {this.props.children}
      </StyledDiv>
    );
  }
}

export default App;
