import React from "react";
import PropTypes from "prop-types";

class App extends React.Component{  // function 아니므로 return X
  state = {    // state -> object , component의 data 넣을 공간 있고 이 데이터가 변함
    count: 0    // 바꿀 데이터를 넣음
  };
  add = () => {   // javascript 코드임
    console.log("add");
  };
  minus = () => {   // javascript 코드임
    console.log("minus");
  };

  render() {   // react component의 render method 사용
    return (
      <div>
        <h1>the number is : {this.state.count}</h1>
        <button onClick={this.add}>Add </button>
        <button onClick={this.minus}>Minus</button>
      </div>  // onClick -> react magic , not add() -> function
      );
  }
}
// 왜 사용? class component가 가진 state 때문에!!

export default App;
