import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component{
    state = {
        applications: null
    }

    componentDidMount() {
        axios.get('http://localhost:5000/applications')
            .then(res => {
                console.log(res.data)
                this.setState({applications: res.data})
            })
            .catch(err => console.log(err) )
    }

    render() {
    const applicationList = this.state.applications ? this.state.applications.map((app) => {
        return (
            <li>{app.appfullname}</li>
        )
    }): null

        return (
        <div>
        <ul> {applicationList} </ul>
        </div>
        );

    }
}


export default App;
