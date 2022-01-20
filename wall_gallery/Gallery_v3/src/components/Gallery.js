import React,{createUseStyles} from "react";
import './Gallery.css';
import Zoom from './Zoom';
class App extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false,
			show : true
		};
	}
	toggle = () => this.setState((currentState) => ({show: !currentState.show}));
	
	
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
			<>
			<button className="close"onClick={this.toggle}>{this.state.show ? 'Hide' : 'show'}</button>
			
		<div className = "allimg">
            {
				
				items.map((item) => (
                
                    <p >  
						
                        <span className="images" >
						{this.state.show && <span><img src={item.urls.small}/></span>}
                            {/* <b><span>{item.description}</span></b>
                            <b><span>{item.alt_description}</span></b> */}
                        </span>
                    </p>
                
				))
			}
			<Zoom />
		</div>
		</>
	);
    }
}

export default App;
