import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []    // 미래에 쓸 state을 선언하는 것 필수 X , setState 사용할 때 state 안에 default 값 선언할 필요 없다.
  };
  getMovies = async () => {
    const {data : {data : {movies}}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"); // 데이터를 잡음, async로 await 사용, rating순으로
        // console.log(movies);
        //{{{}}} 안 쓰면 movies.data.data.movies 대입해 원하는 항목에 맞춰 이동
    this.setState({ movies, isLoading : false });    // 원래는 {movies:movies} 최신버전에서는 단축가능
      };  // 하나의 setState에서 두 개의 상태 변경 

  componentDidMount() { // render 뒤에 시행
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return <div>{isLoading ? "Loading.." : movies.map(movie => {
            //console.log(movie); object 보임
      return <Movie 
      key={movie.id}  // 없으면 키 있어야한다고 경고 나옴
      id={movie.id}
      year={movie.year}
      title={movie.title}
      summary={movie.summary}
      poster={movie.medium_cover_image}
      />   // return 해줘야함 + Prop 넣어줌
    })}</div>; // 위 문장 없이는 this.state.isLoading 사용
  }
}

export default App;
