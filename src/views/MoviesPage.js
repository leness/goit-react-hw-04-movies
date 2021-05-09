import { Component } from "react";
import MovieList from '../components/MoviesList'
import s from '../styles/base.module.css'
import FetchApi from '../services/api'

export default class MoviesPage extends Component {

    state = {
        query: '',
        movies: [],
        loading: false,
        error: null,
    };

    componentDidMount() {
        if (this.props.location.search) {
            this.searchMovie(this.props.location.search.slice(7))
        }
    }


    searchMovie = query => {
    this.setState({ loading: true });
    FetchApi
      .fetchShowSearch(query)
      .then(movies => this.setState({ movies }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

    

    handleChange = e => {
        this.setState({ query: e.currentTarget.value });
    }

    handleSubmit = e => {
        const { location, history } = this.props;
        const { query } = this.state;

        e.preventDefault();


        this.searchMovie(query);
        history.push({ ...location, search: `query=${query}` });
        // console.log(this.state.query);
       }
    

    render() {
        const { query, movies } = this.state;
        
        return (
            <div>
            <form onSubmit={this.handleSubmit} className={s.inputForm}>
                <input
                    name="name"
                    type="text"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    autoComplete="off"
                    placeholder="Search movies"
                    value={query}
                    onChange={this.handleChange}
                />
                <button type="submit">Search</button>
                </form>
                <MovieList movies={movies} />
               
            </div>

        )
    }
}

