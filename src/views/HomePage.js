import { Component } from "react"
import axios from "axios";
import { Link } from 'react-router-dom'
import routes from '../routes'


 
export default class HomePage extends Component {
    state = {
        results: [],
    };

    async componentDidMount() {
        const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=681186281f0908c0103f6be4e5dcc22b')
        console.log(response.data);

        this.setState({ results: response.data.results });

    }

    
    render() {
        const { results } = this.state;
        const { location } = this.props;
        // console.log(this.props.match.url);
        return (
            <>
                <h1>Trending today</h1>

                <ul>
                    {results.map(({ title, id }) => <li key={id}>
                        <Link
              to={{
                pathname: `${routes.movies}/${id}`,
                state: {from: location},
              }}
            >
              {title}
            </Link>
                    </li>)}
                </ul>
            </>
        )
    }
}


