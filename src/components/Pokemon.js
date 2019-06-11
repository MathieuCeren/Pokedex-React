import React from "react";

class Pokemon extends React.Component {
	render() {
		return (
			<div>
				<h1>PokePoke</h1>
					{
						this.props.name && <p>Pokemon name: 
						<span> {this.props.name}, {this.props.id}</span>
						</p>
					}
					{this.props.experience}
					{this.props.height}
					{this.props.weight}
					<img src={this.props.img_url}/>
					{this.props.error}

			</div>


		);

	}

}

export default Pokemon