import React, {useEffect} from 'react';
import { getPost} from '../../Actions/userActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CriarPost from './CriarPost';
import Image from 'react-bootstrap/Image';
import Container from "react-bootstrap/Container";


function Post({id, Post, getPost}) {
    useEffect(()=>{
      getPost()
  },[getPost])

  

  return(
      
      <Container id="contehome1">
      <Image
        id="header"
        src="https://fotos.subefotos.com/c2427404481f5244287e9b2a40964bfdo.png"
      ></Image>
      <CriarPost />

      {Post.map(P => {
          return <div className="Post" key={P.userIdUser+P.idPost}>
           <span>O usuário {P.userIdUser} postou o seguinte: {P.message} </span>
           <Link to={'/post/'+ P.id}>
           <p> Quer deixar um comentário? </p>
                </Link>
           
      </div>})}
      




      </Container>

  );

}

function mapStateToProps(state){
    return{
        Post : state.usuario.post
    }
  }
  
  export default connect (mapStateToProps,{getPost})( Post )
  