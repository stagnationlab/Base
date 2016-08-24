import React, { Component, PropTypes } from 'react';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import routes from './routes';

export default class Root extends React.Component {
	static propTypes = {
		store: PropTypes.object.isRequired,
	};

	render() {
		return (
			<Provider store={this.props.store}>
				<Router history={browserHistory} routes={routes} />
			</Provider>
		);
	}
}
