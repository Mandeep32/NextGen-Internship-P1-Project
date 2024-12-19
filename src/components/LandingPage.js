import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="container text-center mt-5">
            <div className="jumbotron bg-light p-5">
                <h1 className="display-4">Welcome to CollabTool</h1>
                <p className="lead">
                    CollabTool is your go-to platform for seamless real-time collaboration. 
                    Work together on documents, share ideas, and communicate effortlessly with your team.
                </p>
                <hr className="my-4" />
                <p>
                    Whether you're working on a team project or just need to organize your thoughts, 
                    CollabTool offers all the features you need to stay productive.
                </p>
                <Link className="btn btn-primary btn-lg" to="/register" role="button">Get Started</Link>
            </div>
        </div>
    );
};

export default LandingPage;