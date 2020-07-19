import '../actions/projectAction';
import { PROJECT_CREATED, CREATING_PROJECT, CREATING_ERROR, SHOW_PROJECTS, FETCHING_PROJECTS, FETCHING_FAILED } from '../actions/projectAction'
// import {useDispatch} from "react-redux";

const initialState = {
    projects: [],
    loading: false,
    error: ''
};

const projectReducer = (state = initialState, action) => {
    console.log('action in reducer ', action.projects)
    switch (action.type) {
        case PROJECT_CREATED: return {
            ...state,
            projects : [...state.projects, action],
            loading : false
        }
            break;

        case CREATING_PROJECT: return {
            ...state,
            loading: action.loading
        }
            break;

        case CREATING_ERROR: return {
            ...state,
            loading : action.loading
        }
            break;

        case FETCHING_PROJECTS : return {
            ...state,
            loading : action.loading
        }
            break;

        case FETCHING_FAILED : return {
            ...state,
            loading : action.loading
        }
            break;

        case SHOW_PROJECTS : 
        return {
            ...state,
            projects: [...state.projects, action.projects],
            loading: false
        }
            break;
    
        default:
            return state;
    }
}

export default projectReducer;