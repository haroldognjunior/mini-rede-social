import React, { useState } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { loggin, getUser  } from "../../Actions/userActions";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import "./css/login.css";
import swal from "sweetalert";

function Login({ loggin,getUser}){

  const [input, setInput] = useState({
      nomeUser : null,
      senhaUser : null
      
  })

  const handleInputChange = function(e){
    e.preventDefault()
    setInput({
        ...input,
        [e.target.name] : e.target.value
    })
}

  /* const dispatch = useDispatch();
  function enviarFormulario () {
    dispatch(loggin(input));
  } */
 
  const enviarFormulario = function(e){
    e.preventDefault()
    const user= {
        nomeUser: input.nombreUser,
        senhaUser: input.contraUser
    }
    getUser(input.nomeUser)
            console.log(input, "esto es del user")
           
                loggin(input)
            
        
  
}

  const cancelar = function (e) {
    window.location.replace("http://localhost:3000");
  };

  return (
    <Container id="login">
      <Image
        id="header"
        src="https://fotos.subefotos.com/97d96c5903bb437b451cff5d3f864f20o.png"
      ></Image>
      <form 
        className="form-signin" 
        onSubmit={(e)=>e.preventDefault()}>
        <div id="contelogin2">          
            <input
              name="nomeUser"
              placeholder="Nome de usuário"
              onChange={handleInputChange}
              required
            />         
        </div>
        <div id="contelogin2">          
            <input
              name="senhaUser"
              type="password"
              placeholder="Senha"
              onChange={handleInputChange}
              required
            />                 
        </div>
        <div className="botoes1">
          <input
            className="btn btn-outline-dark"
            type="submit"
            onClick={enviarFormulario}
            value="Iniciar Sessão"
          />
          <button
           className="btn btn-outline-light" 
           type="button" 
           onClick={cancelar}>
            Voltar
          </button>
        </div>
      </form>      
    </Container>
  );
}

function mapStateToProps(state){
  return {
      usuarioConectado : state.usuario.usuarioConectado
  }
}

export default connect (mapStateToProps,{loggin,getUser})( Login )