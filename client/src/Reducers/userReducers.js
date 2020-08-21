import {
  ADD_USER,
  GET_USER,
  LOGGIN,
  GET_USERS,
  GET_USER_LOGGED,
  GET_POST
} from "../Constants/userConstants";

const initialState = {
  usuarios: [],
  usuarioConectado: {},
  post: []
   
  };

export default function usuario(state = initialState, action) {
    switch (action.type) {
      case ADD_USER:
      return {
        ...state,
        usuarios: state.usuarios,
      };
      case GET_USER:
      return {
        ...state,
        usuarios: state.usuarios
      };
      case LOGGIN:
      return {
        ...state,
        usuarioConectado: action.payload
            };
            case GET_USERS:
            return {
                ...state,
                usuarios: action.payload
            }
            case GET_USER_LOGGED:
              return {
                  ...state,
                  usuarioConectado: action.payload
              }
              case GET_POST:
            return {
                ...state,
                post: action.payload
            }
      

        default:
      return state;
    }
}