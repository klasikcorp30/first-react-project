import React, { Component } from 'react';
import '../assets/index.css';

class Hero extends Component{
    render(){
        return(
            <div className="container hero">
                <div class="jumbotron jumbotron-fluid">
                    <h1 className="display-4">Reactive Application</h1>
                    <p className="lead text-center">Virtual DOM Is What I Do.</p>
                </div>
            </div>
        )
    }
}

export default Hero;