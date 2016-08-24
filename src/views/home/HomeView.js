import classNames from 'classnames';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import './HomeView.scss';
import { increment, decrement } from '../../actions/test';

@connect(state => ({
	value: state.test.value,
}), {
	increment,
	decrement,
})
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
			increment,
			decrement
		} = this.props;

		const {
			isOkToShowThis,
		} = this.state;

		const btnClassName = 'btn123';
		const className = classNames(
			'HomeView babelPlugin babelPlugin babelPlugin',
			btnClassName,
			{
				isActive: this.isActive(),
				isVisible: isOkToShowThis,
			}
		);

		return (
			<div className={className} onClick={this.handleClick}>
				<button onClick={decrement}>-</button>
				{value}
				<button onClick={increment}>+</button>
			</div>
		);
	}


	handleClick(e) {
		e.preventDefault();
	}

	isActive() {
		return Math.random() > 0.5;
	}
}