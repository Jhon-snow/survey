import {TOGGLE_TOKEN} from '../actions/Main';
const initialState = {
    employess:[],
    surveys: [],
    assignedstate: [],
    surveyname: ' ',
    assignedsurveyname:' '
};
const verifyReducer = (state = initialState,action:any)=>{
    switch(action.type){
        case TOGGLE_TOKEN:
            return {...state,employess:action.token}
        default: return state;
    }
}
export default verifyReducer;