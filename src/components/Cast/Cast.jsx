
import axios from "axios"
import { Component } from "react"


export default class Cast extends Component {
   
    state = {
        cast: [],
    }


    async componentDidMount() {
        const { movieId } = this.props.match.params;
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=681186281f0908c0103f6be4e5dcc22b`);
      
        this.setState({ cast: [...response.data.cast] })
    }


    render() {
        const { cast } = this.state;
        return (
        
                <ul>
                    {cast.map(({ id, name, profile_path, character, original_name }) => (
                        <li key={id}>
                          <img src={`https://image.tmdb.org/t/p/w200/${profile_path}`} alt={name} />
                            <p>{character} - {original_name}</p>
                            
                     </li>
                    )  )}
                </ul>
       )
    }
}
