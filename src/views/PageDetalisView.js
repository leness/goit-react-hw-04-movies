import axios from "axios";
import { Component } from "react";
import { Route, Link } from 'react-router-dom'
import Cast from '../components/Cast'
import Reviews from '../components/Reviews'
import routes from '../routes'
import s from '../styles/base.module.css'

export default class PageDetalisView extends Component {
    state = {
        
        poster_path: null,
        release_date: null,
        title: null,
        vote_average: null,
        overview: null,
        genres: [],

    };

    async componentDidMount() {
        const { movieId } = this.props.match.params;
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=681186281f0908c0103f6be4e5dcc22b`);
        console.log(response.data);
        
        this.setState({ ...response.data });
    }

    handleGoBack = () => {
        const { location, history } = this.props;

        // if (location.state && location.state.from) {
        //     return  history.push(location.state.from);
        // }
        // history.push(routes.home);

        history.push(location?.state?.from || routes.home)
    }


    render() {
        const { poster_path, title, release_date, vote_average, overview, genres } = this.state;
        const image = `https://image.tmdb.org/t/p/w200/${poster_path}`
        const { match } = this.props;
        return (
            <div>
 
                <button type='button' onClick={this.handleGoBack} className={s.PageDetal}>Go back</button>
               
                
                <img src={image} alt={title}></img>
                <h1>{title} ({release_date})</h1>
                <p>User Score: {vote_average*10}%</p>
                <h2>Overview</h2>
                <p>{overview}</p>
                <h3>Genres</h3>
                <ul>
                {genres.map(({ id, name }) => (
                  <li key={id}>
                    {name}
                  </li>
                ))}
                </ul>
                
                <h4>Additional information</h4>
                <ul>
                    <li><Link to={`${match.url}/cast`}>Cast</Link></li>
                    <li><Link to={`${match.url}/reviews`}>Reviews</Link></li>
                </ul>
               
                <Route path={`${match.path}/cast`} component={Cast} />
                <Route path={`${match.path}/reviews`} component={Reviews} />

            </div>
        )
    }
}

