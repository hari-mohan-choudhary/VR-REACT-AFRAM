import React, {Component} from 'react';
import {connect} from 'react-redux';
import Image from './Image';
import './img.css'																			

class Gallery extends Component{
	constructor(props){
		super(props);
	}

	render() {

		const {data} = this.props;

		return (
			<div >
			
					{data.map((image, index) => {
						return (
						<div className="gallery">
						
							<Image key={index} keyy={index} image={image} />
							 
							</div>
						)
					})}
			
			</div>
		)
	}
};

const mapStateToProps = (state) => ({
  data: state.example.data
});
export default connect(mapStateToProps)(Gallery);


