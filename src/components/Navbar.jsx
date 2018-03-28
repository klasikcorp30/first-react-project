import React,{Component} from 'react';


class NavComponent extends Component{
    render(){
        return(
        <nav className="navbar navbar-expand-lg navbar-light bg-primary p-4">
            <a className="navbar-brand" href="...">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
              <ul className="navbar-nav">
            <li className="nav-item active">
            <a className="nav-link text-white" href="...">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
            <a className="nav-link text-white" href="...">Profile</a>
            </li>
            <li className="nav-item">
            <a className="nav-link text-white" href="...">About Us</a>
            </li>
            <li className="nav-item">
            <a className="nav-link text-white" href="...">Contact</a>
            </li>
            </ul>
            </div>
        </nav>
        )
    }
}

export default NavComponent;