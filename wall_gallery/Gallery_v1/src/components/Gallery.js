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
		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div> ;

		return (
		<div className = "allimg">
            {
				items.map((item) => (
                
                    <sapn className="images">
                    <img src={item.urls.small} />
                    </sapn>
                
				))
			}
		</div>
	);
    }
}

export default App;
