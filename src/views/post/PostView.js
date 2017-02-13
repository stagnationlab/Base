import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as postViewActions from './postViewActions';
import './PostView.scss';

export class PostView extends Component {
	static propTypes = {
		error: PropTypes.string,
		isLoading: PropTypes.bool.isRequired,
		post: PropTypes.shape({
			id: PropTypes.number,
			title: PropTypes.string,
			body: PropTypes.string,
		}),
		getPostById: PropTypes.func.isRequired,
		match: PropTypes.shape({
			params: PropTypes.shape({
				id: PropTypes.string.isRequired,
			}).isRequired,
		}).isRequired,
	};

	componentDidMount() {
		this.props.getPostById(this.props.match.params.id);
	}

	render = () => {
		const {
			isLoading,
			error,
			post,
		} = this.props;

		return (
			<div className="PostView">
				<Choose>
					<When condition={error !== null}>
						<p>Could not load post: {error}</p>
					</When>

					<When condition={isLoading}>
						<p>...loading</p>
					</When>

					<Otherwise>
						<div className="PostView__body">
							<h1>{post.title}</h1>

							<img src={`http://lorempixel.com/200/200/animals/${post.id}`} alt={post.title} />
							<p>{post.body}</p>
						</div>
					</Otherwise>
				</Choose>
			</div>
		);
	};
}

const mapStateToProps = ({ postViewReducer }) => ({
	error: postViewReducer.error,
	post: postViewReducer.post,
	isLoading: postViewReducer.isPostLoading || postViewReducer.post === null,
});

const mapDispatchToProps = {
	...postViewActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(
	PostView,
);