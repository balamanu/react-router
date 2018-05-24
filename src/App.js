import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route'

const User =(params) =>{
  return (<h1>Welcome User {params.username}</h1>)
}
class App extends Component {
  state ={
    loggedIn:false
  }
  loginHandle= ()=>{
    //this.setState({loggedIn:true});

    this.setState(prevState =>({
      loggedIn:!prevState.loggedIn
    }))
  }
  render() {
    return (
      <Router>
      <div className="App">
      <ul>
        <li>
      <NavLink to="/" activeStyle={ {color:'green'}} exact>Home</NavLink>
      </li>
      <li>
      <NavLink to="/about" activeStyle={ {color:'green'}} exact>About</NavLink>
      </li>
      <li>
      <NavLink to="/user/bala" activeStyle={ {color:'green'}} exact>User Bala</NavLink>
      </li>
      <li>
      <NavLink to="/user/krishna" activeStyle={ {color:'green'}} exact>User krishna</NavLink>
      </li>
      </ul>
      <Prompt
        When ={!this.state.loggedIn}
        message={(location)=>{
          return location.pathname.startsWith('/user') ?'Are you User':true
        }}
        />
      
      <input type="button" value={this.state.loggedIn?'log out':'log in'} onClick={this.loginHandle.bind(this)}/>

      <Route path="/" exact strict render={
        ()=>{
          return (<h1>Welcome Home</h1>);
        }
      }/> 
      <Route path="/about" exact strict render={
        ()=>{
          return (<h1>Welcome About</h1>);
        }
      }/> 
      <Route path="/user/:username" exact strict render={({match})=>(
    this.state.loggedIn?(<User username={match.params.username}/>):(<Redirect to="/" />)
      )}/>
      </div>
      </Router>
    );
  }
}

export default App;
