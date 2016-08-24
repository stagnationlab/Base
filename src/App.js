import React, { PropTypes, Component } from 'react';

export default class App extends Component {
	static propTypes = {
		children: PropTypes.element,
	};

	render() {
		return (
			<div className="app">
				<div className="content">
					{this.props.children}
				</div>
			</div>
		);
	}
}