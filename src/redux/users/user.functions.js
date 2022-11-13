import { API } from "../../services/api";

export const loginUser = (datos, navigateTo)=> async(dispatch) =>{

  dispatch({type: 'login_user_start'})

  try {
    const result =await API.post("users/login" ,datos)
        console.log(result);
        dispatch({type: 'login_user_done', payload: result.data})
        localStorage.setItem('token',result.data.token)
        navigateTo('/');

  } catch (error) {
    dispatch({type:'login_error', payload:error.message})
  }

}

export const nuevoUser = (datos, navigateTo) => async(dispatch) =>{
  dispatch({type:'register_user_start'})
  try {
    const resultado = await API.post('users/register', datos)
    dispatch({type:'register_user_done'})
      console.log(resultado);
      navigateTo('/login');
  } catch (error) {
    dispatch({type:'register_error'})
  }
}



export const logoutUser = (navigateTo) => async(dispatch) => {

  dispatch({type: 'logout_user_start'})

try {
  dispatch({type: 'logout_user_done'})
  localStorage.removeItem('token')
  navigateTo('/login')

} catch (error) {
  dispatch(error)
}
}
export const checkSession = (token, navigateTo) => async(dispatch) =>{
  dispatch({type:'checkSession_start'})
  try {
    const resultado = await API.post('users/checksession')
    dispatch({type:'checkSession_done', payload:{user: resultado.data, token:token}})
    localStorage.setItem('token',token)
      console.log(resultado);
      navigateTo('/');
  } catch (error) {
    dispatch({type:'checkSession_error'})
    localStorage.removeItem('token');
    localStorage.clear();
    navigateTo('/login');
  }
}

