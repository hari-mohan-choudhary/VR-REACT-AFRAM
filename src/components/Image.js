import React, {Component} from 'react';
import {Link} from 'react-router';
import './img.css'
class Image extends Component{
	constructor(props){
		super(props);
	}

	render() {
		const {image, keyy} = this.props;
		let url = 'vr/'+keyy;
		return (

<Link to={url} >  <div className="imgdiv" >
<div className="imgtxt" >
    {this.props.image.name} </div>
<img src={image.pano} className="App" />    
    </div>
    </Link>			
			
		)
	}
};

export default Image;