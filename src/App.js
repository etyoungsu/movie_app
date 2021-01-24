import React from "react";

class App extends React.Component{  // function 아니므로 return X
  state = {    // state -> object , component의 data 넣을 공간 있고 이 데이터가 변함
    count: 0    // 바꿀 데이터를 넣음
  };
  add = () => {   // javascript 코드임
    this.setState({ count : this.state.count + 1});   // this.state.count = 1 하면 오류 -> state 직접 변경마라고 함 / react가 refresh하는 것을 원하므로..
  };  // setState은 새로운 state 받음
  minus = () => {   // javascript 코드임
    this.setState( current => ({count: current.count - 1}));   // setState 호출 시 state를 refresh 그리고 render function 호출 
  };  //  function way / state을 set 할 때 react에서 외부 상태에 의존하지 않는 가장 좋은 방법

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
