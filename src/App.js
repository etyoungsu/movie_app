import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
// import {About as portato} 하고 아래 component 안에 potato 가능

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );  // 여기 들어가면 무엇을 할지 설정
}

export default App;