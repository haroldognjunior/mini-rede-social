import React, { useState } from 'react';
import { addPost } from '../../Actions/userActions';
import { connect } from 'react-redux'

function CriarPost({addPost, usuarioConectado}){
  
        const [input, setInput] = useState({
        message: null
    })

    const handleInputChange = function(e){
        e.preventDefault()        
        setInput({
            ...input,
            [e.target.name]: e.target.value            
        })
       
    }
                        
    const enviarCriarPost = function(e){
           e.preventDefault();
      addPost(input, usuarioConectado.idUser) ;     
    }       
         
   return ( 

<div className="container">

    <form className="form-signin needs-validation" data-toggle="validator" noValidate> 
            
            <div className="container">
            <label htmlFor="validationTooltip01">O que está pensando?</label>
            <input className="form-control" required type="text" name="message"  id="validationTooltip01" placeholder="O que está pensando?" onChange={handleInputChange} />              
            </div>
            <br/>
            <button type="submit" className=" btn btn-lg btn-primary btn-block"  value="Postar" onClick={enviarCriarPost} >Postar</button>
            
    </form>

</div>
  
   )
}
function mapStateToProps(state){
  return {
      usuarioConectado : state.usuario.usuarioConectado
  }
}

export default connect(mapStateToProps,{addPost})(CriarPost)