import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as homeViewActions from './homeViewActions';
import './HomeView.scss';

export class HomeView extends Component {
	static propTypes = {
		error: PropTypes.string,
		isLoading: PropTypes.bool,
		posts: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.number.isRequired,
			title: PropTypes.string.isRequired,
			body: PropTypes.string,
		})).isRequired,
		getPostsByUserId: PropTypes.func.isRequired,
	};

	componentDidMount() {
		this.props.getPostsByUserId(1);
	}

	render = () => {
		const {
			error,
			posts,
			isLoading,
		} = this.props;

		return (
			<div className="HomeView">
				<h1>Posts</h1>

				<Choose>
					<When condition={error !== null}>
						<p>Could not load posts: {error}</p>
					</When>

					<When condition={isLoading}>
						<p>...loading</p>
					</When>

					<Otherwise>
						{posts.map(post => (
							<div className="HomeView-post" key={post.id}>
								<img src={`http://lorempixel.com/200/200/animals/${post.id}`} alt={post.title} />
								<h2>{post.title}</h2>
								<p><Link to={`/post/${post.id}`}>view more</Link></p>
							</div>
						))}
					</Otherwise>
				</Choose>
			</div>
		);
	}
}

const mapStateToProps = ({ homeViewReducer }) => ({
	error: homeViewReducer.error,
	posts: homeViewReducer.posts,
	isLoading: homeViewReducer.isPostsLoading,
});

const mapDispatchToProps = {
	...homeViewActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(
	HomeView,
);