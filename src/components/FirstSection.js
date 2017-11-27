import React, { Component } from 'react';

{/* Conteúdo apenas para não deixar vazio */ }
export default class FirstSection extends Component {


    render() {
        return (

            

            <div id="about">
                <div className="container">
                    <div className="section-title text-center center">
                        <h2>About us</h2>
                        <hr></hr>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="about-text">
                                <h4>Who We Are</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare diam commodo nibh.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare diam commodo nibh.</p>
                            </div>
                        </div>
                        <div className="col-md-4"><img src="../../img/about.png" className="img-responsive" /></div>
                        <div className="col-md-4">
                            <div className="about-text">
                                <h4>What We Do</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare diam.</p>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Consectetur adipiscing commodo</li>
                                    <li>Duis sed dapibus leo sed dapibus</li>
                                    <li>Sed commodo nibh ante bibendum</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }


}



