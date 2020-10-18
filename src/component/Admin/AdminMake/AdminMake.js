import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AdminMake = () => {
    const [formData, updateFormData] = useState({
        email: ''
    });
    const getData = (e) => {
        updateFormData({ ...formData, [e.target.name]: e.target.value.trim() });
    }

    const onSubmit = (e) => {
        fetch("https://fast-escarpment-21870.herokuapp.com/addAdmin", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.adminadd === true)  {
              alert('admin added success')
            }
            if (data.adminadd === false)  {
                alert('admin added fail')
              }
          })
          .then(()=> {
            window.location.reload() 
            })
        e.preventDefault();
      };
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9 mt-5">
                    <form onSubmit={(e)=> onSubmit(e)} >
                        <input required onBlur={(e) => getData(e)} type="email" name="email" id="" placeholder="jon@gamil.com" className="form-control mt-5" />
                        <br />
                        <button type="submit" className="btn btn-primary">submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminMake;