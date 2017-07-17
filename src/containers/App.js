import React, {Component} from 'react';
import Router, {Link} from 'react-router';
import {connect} from 'react-redux';

import Spinner from '../components/Spinner';

import 'bootstrap/dist/css/bootstrap.css';
//import 'app.css';



class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {children} = this.props;
		const {example} = this.props;

		return (
			<div>
			
				<div>
				{example.isLoading ? <Spinner /> : children}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
  routerState: state.router, example: state.example
});

export default connect(mapStateToProps)(App);

