import React from 'react';
import avataar from '../assets/images/avataar.svg';

const Navigation = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
			    <div className="container">
			      <a className="navbar-brand js-scroll-trigger" href="#page-top">Zia</a>
			      <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
			        Menu 
			         <i className="fa fa-bars"></i>
			      </button>
			      <div className="collapse navbar-collapse" id="navbarResponsive">
			        <ul className="navbar-nav ml-auto">
			          <li className="nav-item mx-0 mx-lg-1">
			            <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">Portfolio</a>
			          </li>
			          <li className="nav-item mx-0 mx-lg-1">
			            <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">About</a>
			          </li>
			          <li className="nav-item mx-0 mx-lg-1">
			            <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">Contact</a>
			          </li>
			           <li className="nav-item mx-0 mx-lg-1">
			            <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">Abc</a>
			          </li>
			        </ul>
			      </div>
			    </div>
			</nav>

			<header className="masthead bg-primary text-white text-center">
			    <div className="container d-flex align-items-center flex-column">
				    <img className="masthead-avatar mb-5 rounded-circle" src={avataar} alt="" />
				    <h1 className="masthead-heading text-uppercase mb-0">Start Bootstrap</h1> 
				    <div className="divider-custom divider-light">
				    	<div className="divider-custom-line"></div>
				        <div className="divider-custom-icon">
				          <i className="fa fa-star"></i>
				        </div>
				        <div className="divider-custom-line"></div>
				    </div>
				    <p className="masthead-subheading font-weight-light mb-0">Graphic Artist - Web Designer - Illustrator</p>
			    </div>
			</header>

		</div>
	);
}

export default Navigation;