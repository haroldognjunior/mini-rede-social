import React, {useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from "react-redux";
import './css/App.css';
import Home from './Components/Usuario/Home';
import exportCriarUsuario from './Components/Usuario/index';
import Login from './Components/Usuario/Login';
import Post from './Components/Post/Post';
import CriarPost from './Components/Post/CriarPost';
import { getUserLoggedIn ,getUsers} from './Actions/userActions'
import NotFound from './Components/404/NotFound';

function App({getUserLoggedIn}) {
  useEffect(()=>{
    getUserLoggedIn()
},[getUserLoggedIn])

  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/registro" component={exportCriarUsuario} />
           <Route exact path="/login" component={Login} />
           <Route exact path="/post" component={Post} />
           <Route exact path="/criarpost" component={CriarPost} />
          <Route component={NotFound} />
        </Switch>
      </Router>
      </header>
    </div>
  );
}

function mapStateToProps(state){
  return{
      usuario : state.usuario.usuarioConectado
  }
}

export default connect (mapStateToProps,{ getUserLoggedIn,getUsers})( App )
