import React from "react";

class Form extends React.Component {
	render() {
		return (
			<div>
				<form onSubmit={this.props.getStats}>
					<div><input className="input" type="text" name="pokemon" placeholder="name..."/></div>
					<div><button className="button">Get Pokemon</button></div>
				</form>
			</div>
		);
	}
}

export default Form