import { Component, lazy, Suspense } from "react";
import { Route, Link, Switch } from 'react-router-dom'
import FetchApi from '../services/api'
import routes from '../routes'
import s from '../styles/base.module.css'


const Cast = lazy(() =>
  import('../components/Cast' /* webpackChunkName: "Cast" */),
);

const Reviews = lazy(() =>
  import('../components/Reviews' /* webpackChunkName: "Reviews" */),
);

export default class PageDetalisView extends Component {
    state = {
        
        poster_path: null,
        release_date: null,
        title: null,
        vote_average: null,
        overview: null,
        genres: [],

    };

    componentDidMount() {
    const { movieId } = this.props.match.params;

    FetchApi.getMovieDetails(movieId)
      .then(movie => {
        this.setState({ ...movie });
      })
      .catch(error => console.log(error));
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
                <p>User Score: {vote_average * 10}%</p>
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

                <Suspense fallback={<h1>Loading...</h1>}>
                    <Switch>
                        <Route path={`${match.path}/cast`} component={Cast} />
                        <Route path={`${match.path}/reviews`} component={Reviews} />
                    </Switch>
                </Suspense>

            </div>
        )
    }
}

