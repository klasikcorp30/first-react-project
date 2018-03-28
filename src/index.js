import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import './assets/bootstrap.min.css';
import NavComponent from './components/Navbar.jsx';
import registerServiceWorker from './components/registerServiceWorker';
import Hero from './components/Hero.jsx';
import Footer from './components/Footer.jsx';
import App from './components/App.jsx';

ReactDOM.render(<div>
    <NavComponent />
    <App />
    <Hero />
    <Footer/>
    </div>
    , document.getElementById('root'));
registerServiceWorker();
