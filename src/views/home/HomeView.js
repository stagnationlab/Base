import React, { Component } from 'react';
import './HomeView.scss';
import classNames from 'classnames';

export default class HomeView extends Component {
	
	static defaultProps = {};
	
	state = {
		isOkToShowThis: true
	};
	minutv = 0;
	
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
			<div className={className} onClick={this.onClick}>
				tere
			</div>
		);
	}
	
	isActive() {
		return Math.random() > 0.5;
	}
	
	onClick(e) {
		e.preventDefault();
	};
}