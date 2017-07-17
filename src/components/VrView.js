import React, { Component } from 'react';
import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';
import {connect} from 'react-redux';




class VrView extends Component {
  render() {
  	const itemindex = this.props.params.imgurl;
  	const {data} = this.props;
  let	url = data[itemindex].pano.split('/'); //url = ["serverName","app",...,"bb65efd50ade4b3591dcf7f4c693042b"]
    url = "../../"+url.pop();  
  	console.log(url)
    return (
    
	/*			          
I am not fetching server to image becouse here cors error
so header didn't accept there origin I did'n now more about a-fram so I have started work on  and i will fix it	
	    <a-scene>
				    <a-assets>
				    <img id="sky" crossorigin="anonymous" src="http://www.360p.co.uk/wp-content/uploads/2011/05/360-panoramas-truro-park-3-1200x600.jpg"  />
				       
				    </a-assets>
				    <a-sky src="#sky" ></a-sky>
				</a-scene>
*/
<a-scene>
  
 <a-sky id="image-360" radius="10" src={url} ></a-sky>
</a-scene>



    );
  }
}




const mapStateToProps = (state) => ({
  data: state.example.data
});
export default connect(mapStateToProps)(VrView);

