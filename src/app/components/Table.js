import React, {useEffect} from 'react';
import { useSelector, connect, useDispatch } from "react-redux";
import {fetchProjects} from '../actions/projectAction';
import '../../App.css';

function showDeleteAlert(id) {
    console.log('button id ', id)
    const result = window.confirm('Are you sure you wnat ot remove this project?');
    if(result){
        console.log('delete');
    }
}

function Table(props) {
    const dispatch = useDispatch();
    console.log('table rows ', props.rows);

    const tableRows = [];

    if(props.rows != undefined && props.rows.length > 0) {
        props.rows.forEach(element => {
            console.log(element[0]);
            tableRows.push(<tr key={element.id}>
                <td className="small">{element.name}</td>
                <td className="small">{element.description}</td>
                <td className="small">{element.status}</td>
                <td className="small">{element.created_at}</td>
                <td className="small">
                    <button onClick={false} className="default">Add</button>
                    <button onClick={() => showDeleteAlert(element.id)} className="danger">Delete</button>
                    <button onClick={false} className="info">Update</button>
                </td>
                </tr>);
        });
    }

    useEffect(() => {
        dispatch(fetchProjects());
    });

    return(
        <div className="App mt5">
            <table className="center">
                <thead>
                    <tr>
                        <th className="col-width">Name</th>
                        <th className="col-width">Description</th>
                        <th className="col-width">Status</th>
                        <th className="col-width">Created AT</th> 
                        <th className="col-width">Actions</th>
                    </tr> 
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        </div>        
    );
}

const mapStateToProps = state => {
    console.log('map state :', state.projectReducer.projects);
    return {
        rows : state.projectReducer.projects[0]
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);