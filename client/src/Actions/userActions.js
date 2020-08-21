import {
  ADD_USER,
  LOGGIN,
  GET_USER,
  GET_USERS,
  GET_USER_LOGGED,
  GET_POST,
  ADD_POST
  } from "../Constants/userConstants";
import axios from "axios";
import swal from "sweetalert";

export function addUser(user) {
  return function (dispatch) {
    axios
      .post("http://localhost:3001/users/", user)
      .then((res) => {
        if (res.status === 200) {
          swal({
              title: "Cadastro realizado!",
              text:
                "Usuário cadastrado com sucesso =)",
              icon: "success",
            })
            .then((value) => {
              dispatch({ type: ADD_USER }) &&
                window.location.replace("http://localhost:3000/login");
            });
        }
      })
      .catch(() => {
        swal({
          title: "¡Ops!",
          text: "E-mail ou nome de usuário já em uso",
          icon: "error",
        });
      });
  };
}

export function loggin(user) {
  return function(dispatch) {
      return fetch('http://localhost:3001/users/login', {
              headers: {
                  'Accept': '*/*',
                  'Content-Type': 'application/json'
              },
              method: 'POST',
              body: JSON.stringify(user),
              credentials: 'include'

          })
          .then((res) => {
              if (res.status === 200) {
                  return (
                      dispatch({ type: LOGGIN, payload: res.json() }),
                      window.location.replace('http://localhost:3000/post')
                  )
              } else {
                  alert("Error en datos ingresados")
              }
          })
  }
}

export function getUser(user) {
  return function(dispatch) {
      return fetch('http://localhost:3001/users/user/' + user, {
              headers: {
                  'Accept': '*/*',
                  'Content-Type': 'application/json'
              },
              method: 'GET',
              credentials: 'include',

          })
          .then((res) => res.json())
          .then((json) => {
              return dispatch({ type: GET_USER, payload: json })
          })
          .catch(() => {
              console.log("erroasdasdr")
          })
  }
}

export function getUsers() {
  return function(dispatch) {
      return fetch('http://localhost:3001/users', {
              credentials: 'include'
          })
          .then(response => response.json())
          .then(json => {
              return dispatch({ type: GET_USERS, payload: json })
          })
  }
}

export function getUserLoggedIn() {
  return function(dispatch) {
      return fetch('http://localhost:3001/users/login', {
              headers: {
                  'Accept': '*/*',
                  'Content-Type': 'application/json'
              },
              method: 'GET',
              credentials: 'include'

          })
          .then((res) => res.json())
          .then((json) => {
              return dispatch({ type: GET_USER_LOGGED, payload: json })
          })
          .catch(() => {
              console.log("error")
          })

  }
}

export function getPost() {
  return function(dispatch) {
      return fetch('http://localhost:3001/posts/' , {
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json'
        },
        method: 'GET',
        credentials: 'include'

    })
          .then(response => response.json())
          .then(json => {
              dispatch({ type: GET_POST, payload: json })
          })
  }
}

export function addPost(post, idusuario) {

  return function(dispatch) {
      return fetch("http://localhost:3001/posts/" + idusuario + "/", {
              headers: {
                  'Accept': '*/*',
                  'Content-Type': 'application/json'
              },
              method: 'POST',
              body: JSON.stringify(post),
              credentials: 'include'
          })
          .then((res) => {
              if (res.status === 200) {
                  return (
                      dispatch({ type: ADD_POST }),
                      swal('Post publicado com sucesso =)'),
                      window.location.replace('http://localhost:3000/post')
                  )
              } else {
                  alert("Erro =(")
              }
          })
  }
}