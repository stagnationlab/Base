import classNames from 'classnames';
import React, { Component } from 'react';
import './HomeView.scss';

export default class HomeView extends Component {
	
	static defaultProps = {};

	constructor(props) {
		super(props);
		this.state = {
			isOkToShowThis: true,
		};
		this.minutv = 0;
	}

	render() {
		const {
			someProp,
			anotherThing,
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
				tere
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