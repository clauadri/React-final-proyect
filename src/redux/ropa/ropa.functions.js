import axios from "axios"
import { API , API2} from "../../services/api";
export const getClothes = ()=>async(dispatch)=>{
    dispatch({type:'gettingClothes'})

    try {

        const result =await API.get("/ropas")
        console.log(result);
        dispatch({type: 'getClothes', payload: result.data})

    } catch (error) {
        dispatch({type:'errorClothes', payload:error.message})
    }

}
export const createClothes = (datos, navigateTo)=>async(dispatch)=>{
    dispatch({type:'creatingClothes'})
    console.log('hola');
    try {
        console.log(datos);
        const result =await API2.post("/ropas/create", datos)
        console.log(result);
        dispatch({type: 'createdClothes'})
        localStorage.setItem('id',result.data._id)
        console.log(result.data._id);
        navigateTo('/');
    } catch (error) {
        dispatch({type:'errorCreating'})
    }

}