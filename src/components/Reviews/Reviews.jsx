import { Component } from "react";
import axios from "axios"

export default class Reviews extends Component {

    state = {
        reviews: [],
    }


     async componentDidMount() {
        const { movieId } = this.props.match.params;
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=681186281f0908c0103f6be4e5dcc22b`);
      
        this.setState({ reviews: [...response.data.results] })
    }
    render() {
        const { reviews } = this.state;
        return (
            <ul>
                {reviews.map(({ id, author, content }) => (<li key={id}>
                    <p>{author}</p>
                    <p>{content}</p>
                </li>))}
            </ul>
        )
    }
}