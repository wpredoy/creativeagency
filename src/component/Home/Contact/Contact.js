import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <footer className=" FooterStyle">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <h1 className="contactFooter">Let us handle your <br/> project, professionally.</h1>
                        <p className="contactFooterText">With well written codes, we build amazing apps for all <br/> platforms, mobile and web apps in general.</p>
                    </div>
                    <div className="col-md-7 formStyle">
                        <form>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder=" Your Email Address *"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your Name/ Company Name"/>
                        </div>
                        <div className="form-group">
                            <textarea name="" className="form-control"  cols="30" rows="10" placeholder=" Your Message"></textarea>
                        </div>
                        <div className="form-group text-left">
                            <button type="button" className="loginButtonStyle"> Send </button>
                        </div>
                    </form>
                    </div>
                </div>
                <div className="CopyrightStyle">
                    <p>copyright Orange labs {(new Date()).getFullYear()}</p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;