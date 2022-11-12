import axios from "axios"

export const getClothes = ()=>async(dispatch)=>{
    dispatch({type:'gettingClothes'})

    try {

        const result =await axios.get("https://back-proyecto-react.vercel.app/ropas")
        console.log(result);
        dispatch({type: 'getClothes', payload: result})

    } catch (error) {
        dispatch({type:'errorClothes', payload:error.message})
    }

}