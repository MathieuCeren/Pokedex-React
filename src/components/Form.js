import React from "react";

class Form extends React.Component {
	render() {
		return (
			<form onSubmit={this.props.getStats}>
				<input type="text" name="pokemon" placeholder="name..."/>
				<button>Get Pokemon</button>
			</form>

		);
	}
}

export default Form