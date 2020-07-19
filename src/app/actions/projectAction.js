import axios from 'axios';
// import {useDispatch} from "react-redux";

export const PROJECT_CREATED = 'PROJECT_CREATED'
export const CREATING_PROJECT = 'CREATING_PROJECT';
export const CREATING_ERROR = 'CREATING_ERROR';
export const FETCHING_PROJECTS = 'FETCHING_PROJECTS';
export const RENDER_PROJECTS = 'RENDER_PROJECTS';
export const FETCHING_FAILED = 'FETCHING_FAILED';
export const SHOW_PROJECTS = 'SHOW_PROJECTS';

export const creatingProject = () => {
    return {
        type: CREATING_PROJECT,
        loading: true
    }
}

export const creatingError = () => {
    return {
        type : CREATING_ERROR,
        loading : false,
    }
}

export const projectCreated = (data) => {
    // console.log('new project created ', data);
    return {
        type : PROJECT_CREATED,
        name: data.name,
        description: data.description,
        status : data.status,
        created_at : data.created_at
    }
}

export const fetchingProjects = () => {
    return {
        type : FETCHING_PROJECTS,
        loading : false
    }
}

export const fetchingFailed = () => {
    return {
        type : FETCHING_FAILED,
        loading : false
    }
}

export const showProjects = (projects) => {
    return {
        type : SHOW_PROJECTS,
        projects : projects,
        loading : false
    }
}

export const fetchProjects = () => {
    return (dispatch, getState) => {
        dispatch(fetchingProjects());
        return axios.get('http://localhost:5000/projects').then(response => {
            console.log('projects fetched :', response.data.projects);
            if(response.data.status === 'success')
                dispatch(showProjects(response.data.projects));
            else
                dispatch(fetchingFailed());
        }).catch(error => {
            console.log('error: ', error.message);
            dispatch(fetchingFailed());
        });
    }
}

// export const renderProjects = (projects) => {
//     return (dispatch, getState) => {
//         dispatch()
//     }
// }

export const createProject = (data) => {
    return (dispatch, getState) => {
        dispatch(creatingProject());
        // console.log('current state ', getState());
        return axios.post('http://localhost:5000/project/create', {
            name : data.name,
            description : data.description,
            status : data.status
        }).then(response => {
            const status = response.data.status;
            response.data.name = data.name;
            response.data.description = data.description;
            if(status === 'success'){
                dispatch(projectCreated(response.data));
                alert('Project created successfully');
            }
            else{
                dispatch(creatingError());
                alert('error');
            }
        }).catch(error => {
            console.log('an error occurred ', error);
        });
    };
}

export default createProject;