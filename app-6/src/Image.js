import React, {Component} from 'react'; 

class Image extends Component{
    render(){
        return(
            <div>
                <img
                height= "600"
                width= "750" 
                src={this.props.url}
                alt="ocean tide" />
            </div>
        )
    }
}

export default Image;

//responsible for displaying an image and receiving a prop from App with the image url on it