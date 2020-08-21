import React, {useEffect} from 'react';
import { getPost} from '../../Actions/userActions';
import { connect } from 'react-redux';
import CriarPost from './CriarPost';


function Post({Post, getPost}) {
    useEffect(()=>{
      getPost()
  },[getPost])

  return(
      <div>
      <CriarPost />

      {Post.map(P => {
          return <div className="Post" key={P.userIdUser+P.idPost}>
           <span>O usuário {P.userIdUser} postou o seguinte: {P.message} </span>
      </div>})}
      




      </div>

  );

}

function mapStateToProps(state){
    return{
        Post : state.usuario.post
    }
  }
  
  export default connect (mapStateToProps,{getPost})( Post )
  