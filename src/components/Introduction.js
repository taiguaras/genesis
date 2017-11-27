import React, { Component } from 'react';


export default class Introduction extends Component {


    render() {
        return (

            <div id="intro">
                <div className="intro-body">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1">
                                <h1><span className="brand-heading">Genesis</span></h1>
                                <p className="intro-text">Developing custom experiences from scratch. </p>
                                <a href="#about" className="btn btn-default page-scroll">Get Started</a> </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }


}



