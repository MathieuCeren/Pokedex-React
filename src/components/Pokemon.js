import React from "react";

class Pokemon extends React.Component {
	render() {
		return (
			<div className="card">
					{
						this.props.img_url && <p className="container"> 
						<span><img src={this.props.img_url} alt="pokemon sprites" className="sprites"/></span>
						</p>
					}
					{
						this.props.name && <p className="container">Pokemon name: 
						<span className="value"> {this.props.name}</span>
						</p>
					}
					{
						this.props.id && <p className="container">Pokemon id:
						<span className="value"> {this.props.id}</span>
						</p>
					}
					{
						this.props.experience && <p className="container">Experience:
						<span className="value"> {this.props.experience} </span>
						</p>
					}
					{
						this.props.height && <p className="container">Height: 
						<span className="value"> {this.props.height}</span>
						</p>
					}
					{
						this.props.weight && <p className="container">Weight:
						<span className="value"> {this.props.weight}</span>
						</p>
					}
					{
						this.props.stats && <p className="container">Stats:
						<span className="value"> {this.props.stats}</span>
						</p>
					}
					{
						this.props.error && <p className="container">
						<span className="value">{this.props.error}</span>
						</p>
					}

			</div>


		);

	}

}

export default Pokemon