import React, { PropTypes } from 'react';

const App = (props) => (
	<div className="app">
		<div className="content" key={props.location.pathname}>
			{props.children}
		</div>
	</div>
);

App.propTypes = {
	children: PropTypes.element,
	location: PropTypes.shape({
		pathname: PropTypes.string.isRequired,
	}).isRequired,
};

export default App;
