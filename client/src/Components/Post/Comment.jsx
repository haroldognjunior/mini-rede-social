import React, {useEffect} from 'react';
import { getComment} from '../../Actions/userActions';
import { connect } from 'react-redux';


function Comment({id, comentario, getComment}) {
   
  useEffect(()=>{
    getComment(id)     
 },[])
  return(
      <div> 
    { comentario.map(C => {   
          return <div className="comentario" key={C.userIdUser+C.comment}>
           { <p>O usuário {C.userIdUser} comentou o seguinte: {C.comment} </p>}           
      </div>}) }
      </div>
  );
}

function mapStateToProps(state){
    return{
        comentario : state.usuario.comentario
    }
  }  
  export default connect (mapStateToProps,{getComment})( Comment )
  