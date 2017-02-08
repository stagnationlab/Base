import classNames from 'classnames';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import './HomeView.scss';
import { increment, decrement, loadApi } from './actions/homeViewActions';

export class HomeView extends Component {
	static propTypes = {
		value: PropTypes.number.isRequired,
		isLoading: PropTypes.bool.isRequired,
		apiData: PropTypes.string,
		apiError: PropTypes.string,
		loadApi: PropTypes.func.isRequired,
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

	render = () => {
		const {
			value,
		} = this.props;

		const {
			isOkToShowThis,
		} = this.state;

		const btnClassName = 'btn123';
		const className = classNames('HomeView babelPlugin babelPlugin babelPlugin', btnClassName, {
			isVisible: isOkToShowThis,
		});

		return (
			<div className={className} onClick={this.handleClick}>
				<img src="./img/lolcat.jpg" alt="lolcat" />
				<button className="btn btn-decrement" onClick={this.props.decrement}>-</button>
				{value}
				<button className="btn btn-increment" onClick={this.props.increment}>+</button>
				<br />
				<button className="btn btn-load-data" onClick={this.handleLoadApi.bind(null, false)}>
					Load data from apisdg fgsdfg
				</button>
				<button className="btn btn-load-data" onClick={this.handleLoadApi.bind(null, true)}>
					Test api error
				</button>
				<p>API state: {this.getApiState()}</p>
				<br />
				<input />
			</div>
		);
	}

	handleLoadApi = (testFail = false) => {
		this.props.loadApi({ testFail });
	}

	handleClick = (e) => {
		e.preventDefault();
	}

	getApiState = () => {
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

const mapStateToProps = ({ homeViewReducer }) => ({
	value: homeViewReducer.value,
	isLoading: homeViewReducer.isLoading,
	apiData: homeViewReducer.data,
	apiError: homeViewReducer.error,
});

const mapDispatchToProps = {
	increment,
	decrement,
	loadApi,
};

export default connect(mapStateToProps, mapDispatchToProps)(
	HomeView,
);