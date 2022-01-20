import React, { Component } from 'react'
class Zoom extends Component{
constructor(props){
	super(props)
	
	// Initializing states
	this.state = {height:null, width:null}
	
	// Bind context of 'this'
	this.handleZoomIn = this.handleZoomIn.bind(this)
	this.handleZoomOut = this.handleZoomOut.bind(this)
	
	// Create reference of DOM object
	this.imgRef = React.createRef()
}

componentDidMount(){
	// Saving initial dimension of image as class properties
	this.initialHeight = this.imgRef.current.clientHeight
	this.initialWidth = this.imgRef.current.clientWidth
}

// Event handler callback for zoom in
handleZoomIn(){

	// Fetching current height and width
	const height = this.imgRef.current.clientHeight
	const width = this.imgRef.current.clientWidth
	
	// Increase dimension(Zooming)
	this.setState({
	height : height + 10,
	width : width + 10,
	})
}

// Event handler callback zoom out
handleZoomOut(){

	// Assigning original height and width
	this.setState({
	height : this.initialHeight,
	width : this.initialWidth,
	})
}

render(){
	// Assign current height and width to the image
	const imgStyle = { height : this.state.height, width: this.state.width}
	return(
	<div>
		{/* Assign reference to DOM element	 */}
        <pre>
            <button onClick={this.handleZoomIn}>Zoom In</button>
            
            <button onClick={this.handleZoomOut}>Zoom Out</button>
		</pre>
        <div><br/>
		    <img style={imgStyle} ref={this.imgRef} src='https://images.unsplash.com/photo-1610878180933-123728745d22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FuYWRhJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80' alt='Pictures Not found' />
		</div>
	</div>
	)
}
}
export default Zoom
