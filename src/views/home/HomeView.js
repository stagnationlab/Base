import classNames from 'classnames';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import autobind from 'autobind-decorator';

import './HomeView.scss';
import { increment, decrement, loadApi } from '../../actions/test';

@connect(state => ({
	value: state.test.value,
	isLoading: state.test.isLoading,
	apiData: state.test.data,
	apiError: state.test.error,
}), {
	increment,
	decrement,
	loadApi
})
@autobind
export default class HomeView extends Component {
	static propTypes = {
		value: PropTypes.number.isRequired,
		increment: PropTypes.func.isRequired,
		decrement: PropTypes.func.isRequired,
	};

	constructor(props) {
		super(props);
		this.state = {
			isOkToShowThis: true,
		};
		this.minutv = 0;
	}

	render() {
		const {
			value,
		} = this.props;

		const {
			isOkToShowThis,
		} = this.state;

		const btnClassName = 'btn123';
		const className = classNames(
			'HomeView babelPlugin babelPlugin babelPlugin',
			btnClassName,
			{
				isVisible: isOkToShowThis,
			}
		);

		return (
			<div className={className} onClick={this.handleClick}>
				<button onClick={this.props.decrement}>-</button>
				{value}
				<button onClick={this.props.increment}>+</button>
				<br />
				<button onClick={this.handleLoadApi.bind(this, false)}>Load data from api</button>
				<button onClick={this.handleLoadApi.bind(this, true)}>Test api error</button>
				<p>API state: {this.getApiState()}</p>
				<br />
				<Link to="/test">Show another page</Link>
			</div>
		);
	}

	handleLoadApi(testFail = false) {
		this.props.loadApi({ testFail });
	}

	handleClick(e) {
		e.preventDefault();
	}

	getApiState() {
		const {
			isLoading,
			apiData,
			apiError,
		} = this.props;

		if (isLoading) {
			return 'Loading...';
		}

		if (apiError) {
			return apiError;
		}

		if (apiData) {
			return apiData;
		}

		return 'Data not loaded';
	}
}