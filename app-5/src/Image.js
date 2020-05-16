import React, {Component} from 'react'; 

class Image extends Component{
    render(){
        return(
            <div>
                <img
                height= "600"
                width= "750"  
                src={this.props.url}
                alt="green space" />
            </div>
        )
    }
}

export default Image;



//so why did we give the url to the parent and just reference it here in the child? shouldn't this be part of the information that the child passes up to it's parent since this is the component reserved for the image? >> the child CAN'T pass any information up to the parent because of unidirectional data flow. Only the parent can hold the information and pass it along to its children, so the url has to be stored on the parent. the child here just accesses it (by means of a prop object with the url on it) and then does stuff with the info