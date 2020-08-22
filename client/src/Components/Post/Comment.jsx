import React, {useEffect} from 'react';
import { getComment} from '../../Actions/userActions';
import { connect } from 'react-redux';
import Image from 'react-bootstrap/Image';
import Container from "react-bootstrap/Container";


function Comment({id, comentario, getComment}) {
   
  useEffect(()=>{
    getComment(id)     
 },[])
  return(
    <Container id="contehome1">
      <Image
        id="header"
        src="https://fotos.subefotos.com/c2427404481f5244287e9b2a40964bfdo.png"
      ></Image>
    { comentario.map(C => {   
          return <div className="comentario" key={C.userIdUser+C.comment}>
           { <p>O usuário {C.userIdUser} comentou o seguinte: {C.comment} </p>}           
      </div>}) }
      </Container>
  );
}

function mapStateToProps(state){
    return{
        comentario : state.usuario.comentario
    }
  }  
  export default connect (mapStateToProps,{getComment})( Comment )
  