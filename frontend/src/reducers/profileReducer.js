import { PROFILE_DETAIL_FAIL, PROFILE_DETAIL_REQUEST, PROFILE_DETAIL_SUCCESS, PROFILE_LIST_FAIL, PROFILE_LIST_REQUEST, PROFILE_LIST_SUCCESS } from "../constants/profileconstants";

export const profileListReducer=(state={loading: true ,profile:{}},action)=>{
    switch(action.type)
{
case PROFILE_LIST_REQUEST:
return{loading:true};

case PROFILE_LIST_SUCCESS:
    return{loading:false,profile:action.payload};

    case PROFILE_LIST_FAIL:
        return{loading:false,error:action.payload};


default:
    return state;



}
}
export const profileDetailReducer=(state={profile:{}, loading: true },action)=>{
switch (action.type){
case PROFILE_DETAIL_REQUEST:
return {loading:true};

case PROFILE_DETAIL_SUCCESS:
return {loading:false, profile:action.payload};

case PROFILE_DETAIL_FAIL:
    return {loading:false, error:action.payload};

default:
return state;

}

}