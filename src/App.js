import React from "react";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []    // 미래에 쓸 state을 선언하는 것 필수 X , setState 사용할 때 state 안에 default 값 선언할 필요 없다.
  };
  componentDidMount() { // render 뒤에 시행
    setTimeout(() => {  // setTimeout -> javascript의 것
      this.setState({ isLoading: false});
    }, 6000);
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading.." : "We are ready"}</div>; // 위 문장 없이는 this.state.isLoading 사용
  }
}

export default App;
