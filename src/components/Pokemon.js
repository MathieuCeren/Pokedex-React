import React from "react";

class Pokemon extends React.Component {
	render() {
		return (
			<div>
				<h1>PokePoke</h1>
					{
						this.props.name && <p>Pokemon name: 
						<span> {this.props.name}</span>
						</p>
					}
					{
						this.props.id && <p>Pokemon id:
						<span> {this.props.id}</span>
						</p>
					}
					{
						this.props.experience && <p>Experience:
						<span> {this.props.experience} </span>
						</p>
					}
					{
						this.props.height && <p>Height: 
						<span> {this.props.height}</span>
						</p>
					}
					{
						this.props.weight && <p>Weight:
						<span> {this.props.weight}</span>
						</p>
					}
					{
						this.props.img_url && <p> 
						<span><img src={this.props.img_url}/></span>
						</p>
					}
					{
						this.props.error && <p>
						<span>{this.props.error}</span>
						</p>
					}

			</div>


		);

	}

}

export default Pokemon