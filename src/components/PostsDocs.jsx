import { Component } from 'react';
import '../App.css';
import DogList from './DogList';

const apiUrl_1 = 'https://dog.ceo/api/breeds/image/random/12';
class PostsDocs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dogs: []
        }
    }

    componentDidMount() {
        fetch(apiUrl_1)
            .then(res => res.json())
            .then(data => {
                this.setState({ dogs: data.message })
            })
    }

    render() {
        return (
            <DogList dogs={this.state.dogs} />
        )
    }
};

export default PostsDocs;