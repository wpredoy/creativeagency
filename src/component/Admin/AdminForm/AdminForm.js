import React from 'react';
import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AdminForm = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null)

    const handelBlur = e => {
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)
    }

    const handelFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile)
    }

    
    const handelSubmit = () => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('title', info.title)
        formData.append('description', info.description)

        fetch('https://fast-escarpment-21870.herokuapp.com/agencyinfo', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
                console.log(data)
        })
        .catch(error => {
                console.error(error)
        })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9 mt-5">
                    <form onSubmit={handelSubmit}>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Service Title</label>
                            <input onBlur={handelBlur} type="text" class="form-control" name="title" placeholder="Enter Title"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Description</label>
                            <textarea onBlur={handelBlur} type="text" class="form-control" name="description" placeholder="Enter Description"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Uploaded Image</label>
                            <input onChange={handelFileChange} type="file" class="form-control" id="exampleInputPassword1" placeholder="picture"/>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminForm;