import Axios  from "axios";
import axios  from "axios";
import { PROFILE_DETAIL_FAIL, PROFILE_DETAIL_REQUEST, PROFILE_DETAIL_SUCCESS, PROFILE_LIST_FAIL, PROFILE_LIST_REQUEST, PROFILE_LIST_SUCCESS } from "../constants/profileconstants";

export const profilelist=()=>async(dispatch)=>{

  dispatch( {type: PROFILE_LIST_REQUEST}

);
try{
    const {data}= await axios.get('/api/profile');

dispatch({type: PROFILE_LIST_SUCCESS,payload:data});

}catch(error){

dispatch({type:PROFILE_LIST_FAIL,payload:error.message});
}


};

export const detailsProfile=(profileId)=>async(dispatch)=>{
dispatch({type : PROFILE_DETAIL_REQUEST,payload:profileId});

try{

const {data} = await Axios.get(`/api/profile/${profileId}`);
dispatch({type:PROFILE_DETAIL_SUCCESS,payload:data});


}catch(error){
  dispatch({type:PROFILE_DETAIL_FAIL,
    payload:error.response && error.response.data.message? 
    error.response.data.message: error.message,});

    
}
};