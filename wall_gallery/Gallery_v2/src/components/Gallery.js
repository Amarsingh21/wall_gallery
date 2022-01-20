import React from "react";
import './Gallery.css';
class App extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}
    clickHandler(){
        this.setState({
            container: {
                width: 200,
                height: 220
              },// container holding your image 

              image: {
                width: '100%',
                height: '100%',
                resizeMode: 'cover',
              },
        });
    }

	// ComponentDidMount is used to
	componentDidMount() {
		fetch("http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) 
            return (
            <div>
			    <h2> Searching, Wait some time.... </h2> 
            </div> 
            );

		return (
		<div className = "allimg">
            {
				items.map((item) => (
                
                    <p >  
						<span className="close">X</span>
                        <span className="images">
							<img src={item.urls.small} onClick={this.clickHandler.bind(this)}/>
                            {/* <b><span>{item.description}</span></b>
                            <b><span>{item.alt_description}</span></b> */}
                        </span>
                    </p>
                
				))
			}
		</div>
	);
    }
}

export default App;
