
import React from 'react';

import './App.css';
import {Cardlist} from './components/card-list/card-list.component';
import {Searchbox} from './components/card-list/searchbox/searchbox.component';

class  App extends React.Component {
  constructor(){
    super();

    this.state={

      monsters: [],
      searchField:''

    };
  }

handlechange=(e)=>{
  this.setState({searchField: e.target.value});



};


  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users=>this.setState({monsters:users}));
  }
  render(){
    const {monsters,searchField}=this.state;
    const filteredMonsters=monsters.filter(monster=> monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className='App'>
        <h2>modelrolodex</h2>
        <Searchbox 
        placeholder= 'search-monsters' 
        handlechange={this.handlechange}></Searchbox>
        <Cardlist monsters={filteredMonsters}/>
      </div>

    );


  }


}

export default App;
