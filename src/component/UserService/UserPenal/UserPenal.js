import React, { useContext, useState } from 'react';
import { newUser } from '../../../App';
import UserSidebar from '../UserSidebar/UserSidebar';


const UserPenal = () => {
    const {order} = useContext(newUser)
    
    const {loggedInUser, setLoggedInUser} = useContext(newUser)
    // const orderImage = JSON.stringify(order.img)
    const [ordercollection, setOrderCollection] = useState({});
    const [file, setFile] = useState(null);
    const [service, setService] = useState([])

    const handleBlur = e => {
        const newOrder = { ...ordercollection };
        newOrder[e.target.name] = e.target.value;
        setOrderCollection(newOrder);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const orderImage = JSON.stringify(order.img)
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('orderImage', orderImage);
        formData.append('name', loggedInUser.displayName);
        formData.append('email', loggedInUser.email);
        formData.append('service', order.title);
        formData.append('description', order.description);
        formData.append('price', ordercollection.price);

        fetch('https://fast-escarpment-21870.herokuapp.com/order', {
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
                    <UserSidebar></UserSidebar>
                </div>
           
                <div className="col-md-9 mt-5">
                    <form onSubmit={handleSubmit} >
                         {loggedInUser && <input value={loggedInUser.displayName} onBlur={handleBlur}  className="form-control" type="text" placeholder="Your name / company’s name" name="name" required/>}
                        <br />
                        {loggedInUser && <input value={loggedInUser.email} onBlur={handleBlur}  className="form-control" type="email" placeholder="Your email address" name="email"  required/>}
                        <br />
                        {<input value={order.title} onBlur={handleBlur}  className="form-control" type="text" placeholder="Services" name="title"/>}
                        <br />
                        <textarea value={order.description} onBlur={handleBlur} className="form-control" placeholder="Project Details" name="description"  required></textarea>
                        <br />
                        <div className="row">
                            <div className="col-md-6">
                                <input onBlur={handleBlur} className="form-control" type="number" name="price"  placeholder="Price" required/>
                            </div>
                            <div className="col-md-6">
                                <input onChange={handleFileChange} className="form-control" type="file" name="file" placeholder="Upload File" required/>
                            </div>
                        </div>
                        <br />
                        <button type="submit" style={{ backgroundColor: "#111430", padding: "10px 35px" }} className="btn text-white">Send</button>
                    </form>


                </div>
            </div>
        </div>
    );
};

export default UserPenal;