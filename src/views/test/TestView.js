import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export class TestView extends Component {
	static propTypes = {
		value: PropTypes.number.isRequired,
	};

	static contextTypes = {
		router: PropTypes.object.isRequired,
	};

	render = () => {
		const {
			value,
		} = this.props;

		return (
			<div>
				<h1>Test view</h1>
				<p>Value from redux: {value}</p>
				<button onClick={this.handleBack}>Go back</button>
			</div>
		);
	}

	handleBack = () => {
		this.context.router.goBack();
	}
}

const mapStateToProps = state => ({
	value: state.test.value,
});

export default connect(mapStateToProps)(TestView);