import React, { Component } from 'react';
import './App.css';
import Navigation from '../components/Navigation';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Footer from '../components/Footer';
import Form from '../components/Form';

class App extends Component {
	render(){
		return (
			<div>
		      <Navigation />
		      <Portfolio />
		      <About />
		      <Form />
		      <Footer />
		    </div>
  		);
	}
}

export default App;
