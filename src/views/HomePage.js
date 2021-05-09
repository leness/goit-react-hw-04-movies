import { Component } from "react"
import FetchApi from '../services/api'
import MovieList from '../components/MoviesList'

 
export default class HomePage extends Component {
    state = {
        results: [],
    };


componentDidMount() {
    FetchApi.getTrendingMovie()
      .then(movie => {
        this.setState({ results: [...movie] });
      })
      .catch(error => console.log(error));
  }

    
    render() {
        const { results } = this.state;
        
        return (
            <>
                <h1>Trending today</h1>

                <MovieList movies={results}/>
            </>
        )
    }
}


