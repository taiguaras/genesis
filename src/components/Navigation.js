import React, { Component } from 'react';


export default class Navigation extends Component {


    render() {
        return (

            <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse"> <i className="fa fa-bars"></i> </button>
                        <a className="navbar-brand page-scroll" href="#intro"> <i className="fa fa-rss"></i> Genesis </a> </div>


                    <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
                        <ul className="nav navbar-nav">

                            <li className="hidden"> <a href="#sera"></a> </li>
                            <li> <a className="page-scroll" href="#about">The First Stage</a> </li>
                        </ul>
                    </div>

                </div>

            </nav>

        );
    }


}























