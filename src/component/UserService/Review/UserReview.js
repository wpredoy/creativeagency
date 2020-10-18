import React from 'react';
import { useState } from 'react';
import UserSidebar from '../UserSidebar/UserSidebar';

const UserReview = () => {
    const [review, setReview] = useState({})
    const [file, setFile] = useState(null);

    const handelReviewSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file)
        formData.append('name', review.name)
        formData.append('designation', review.designation)
        formData.append('reviewdescription', review.reviewdescription)
        fetch('https://fast-escarpment-21870.herokuapp.com/allReview', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                console.log("data")
            })
        
    }

    const handelReviewBlur = (e) => {
        const newReview = {...review}
        newReview[e.target.name] = e.target.value;
        setReview(newReview)
    }

    const handelReviewFileChange = (e) => {
        const viewFile = e.target.files[0];
        setFile(viewFile)
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <UserSidebar></UserSidebar>
                </div>
                <div className="col-md-9 mt-5">
                    <form onSubmit={handelReviewSubmit}>
                       <input onBlur={handelReviewBlur} type="text" placeholder="Your name" className="form-control" name="name" required/>
                        <br />
                        <input onBlur={handelReviewBlur} type="text" placeholder="Company’s name, Designation" className="form-control" name="designation" required/>
                        <br />
                        <input onBlur={handelReviewBlur} type="text" placeholder="Description" className="form-control" name="reviewdescription" required/>
                        <br />
                        <input onChange={handelReviewFileChange} type="file" name="file" placeholder="file" className="form-control" required/>

                        <button style={{ backgroundColor: "#111430", padding: "10px 35px" }} type="submit" className="btn  text-white mt-4">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserReview;