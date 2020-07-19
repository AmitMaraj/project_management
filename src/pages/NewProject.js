import React, {useState} from 'react';
import TextInput from '../app/components/TextInput';
import {createProject, projectCreated} from '../app/actions/projectAction';
import axios from 'axios';
import {
  useDispatch
} from "react-redux";
import { connect } from "react-redux";
// import { projectCreated } from '../app/actions/projectAction';

function NewProject() {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('new');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    console.log('handle input change');
    switch (event.target.name) {
      case 'name':
        setName(event.target.value)
        break;
    
      case 'description':
        setDescription(event.target.value)
        break;
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log('create project');
    dispatch(createProject({
      name: name,
      description: description,
      status: status
    }));
    
    // let params = {
    //       name: name,
    //       description: description,
    //       status: status
    //     };
    // return (dispatch) => {
    //   axios.post('http://localhost:5000/project/create', {
    //     name: params.name,
    //     description: params.description,
    //     status: params.status
    //   }).then(response => {
    //     const status = response.status;
    //     // const dispatch = useDispatch();
    //     if (status === 'success') {
    //       params.created_at = response.created_at;
    //       // dispatch(projectCreated(params));
    //     }
    //   }).catch(error => {
    //     console.log('an error occurred ', error.message);
    //   });
    // }
  }

  return (
    <div>
      <form method="POST" onSubmit={handleSubmit}>
        <TextInput name="name" value={name} onChange={handleChange} holder="name"/>
        <TextInput name="description" value={description} onChange={handleChange} holder="description"/>
        <input type="text" name="status" value={status} readOnly hidden/>
        <button type="submit">Create Project</button>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  console.log('map state to props ', state);
  return {
    projects : state.projects
  }
}

export default connect(mapStateToProps, null)(NewProject);