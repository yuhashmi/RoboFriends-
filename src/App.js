import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfields: '' 
        }
    }

    onSearchChange(event) {
        console.log(event);
    }

    render() {
        return (
            <dl className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={this.state.robots}/>
            </dl>
        );  
    }
}

export default App;