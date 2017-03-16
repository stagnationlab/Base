import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Form, Field, WithFormProp } from 'react-form-helper-sl';
import { required, minLength } from '../../services/validatorService';
import { postViewReducerProps } from './postViewReducer';
import * as postViewActions from './postViewActions';
import Checkbox from './../../components/checkbox/Checkbox';
import './PostView.scss';

export class PostView extends Component {

	static propTypes = {
		...postViewReducerProps,
		error: PropTypes.string,
		getPostById: PropTypes.func.isRequired,
		getCommentsyPostId: PropTypes.func.isRequired,
		saveComment: PropTypes.func.isRequired,
		match: PropTypes.shape({
			params: PropTypes.shape({
				id: PropTypes.string.isRequired,
			}).isRequired,
		}).isRequired,
	};

	componentDidMount() {
		// get post and comments
		this.props.getPostById(this.props.match.params.id);
		this.props.getCommentsyPostId(this.props.match.params.id);
	}

	render = () => {
		const {
			isPostLoading,
			error,
			post,
		} = this.props;

		return (
			<div className="PostView">
				<Choose>
					<When condition={error !== null}>
						<p>Could not load post: {error}</p>
					</When>

					<When condition={isPostLoading}>
						<p>...loading</p>
					</When>

					<Otherwise>
						<div className="PostView__body">
							<h1>{post.title}</h1>

							<img src={`http://lorempixel.com/200/200/animals/${post.id}`} alt={post.title} />
							<p>{post.body}</p>
							<hr />

							{this.renderCommentList()}
							<hr />

							{this.renderCommentForm()}
						</div>
					</Otherwise>
				</Choose>
			</div>
		);
	};

	renderCommentList = () => (
		<div className="PostView__comments">
			<h3>Comments</h3>

			{this.props.comments.map(comment => (
				<div key={comment.id} className="PostView__comment">
					<p>
						<strong>{comment.name}: </strong>
						{comment.body}
					</p>
				</div>
			))}
		</div>
	);

	renderCommentForm = () => (
		<Form
			className="PostView__add-comment"
			onSubmit={this.handleCommentFormSubmit}
			onSuccess={this.handleCommentFormSuccess}
			onFail={this.handleCommentFormFail}
		>
			<div className="PostView__add-comment__field">
				<label>Name</label>
				<Field
					type="text"
					name="name"
					validate={[required, minLength(3)]}
					component={this.renderCommentFormField}
				/>
			</div>

			<div className="PostView__add-comment__field">
				<label>Email</label>
				<Field
					type="text"
					name="email"
					validate={[required, minLength(3)]}
					component={this.renderCommentFormField}
				/>
			</div>

			<div className="PostView__add-comment__field">
				<label>Comment</label>
				<Field
					type="textarea"
					name="body"
					validate={required}
					component={this.renderCommentFormField}
				/>
			</div>

			<div className="PostView__add-comment__field">
				<Field
					name="pointless-checkbox"
					validate={[required, minLength(3)]}
					component={(input, { error, isTouched }) => (
						<div>
							<Checkbox {...input}>Pointless checkbox</Checkbox>
							<br />
							{isTouched && error && (
								<small>{error}</small>
							)}
						</div>
					)}
				/>
			</div>

			<WithFormProp isSubmitting>
				<p>...... I am saving .......</p>
			</WithFormProp>

			<WithFormProp hasErrors={false} isSubmitting={false}>
				<p>...... I have no errors .......</p>
			</WithFormProp>

			<WithFormProp
				component={({ hasErrors, isSubmitting }) => (
					<button type="submit" disabled={isSubmitting || hasErrors}>Send</button>
				)}
			/>
		</Form>
	);

	renderCommentFormField = ({ type, ...props }, { error, isTouched }) => {
		let inputElem;

		switch (type) {
			case 'textarea':
				inputElem = <textarea {...props} rows="5" />;
				break;

			default:
				inputElem = <input {...props} type={type} />;
				break;
		}

		return (
			<div className="PostView__add-comment__field">
				{inputElem}
				<br />
				{isTouched && error && (
					<small>{error}</small>
				)}
			</div>
		);
	}

	handleCommentFormSubmit = values => this.props.saveComment(this.props.post.id, values);

	handleCommentFormSuccess = reset => reset();

	handleCommentFormFail = response => response.validationErrors;
}

const mapStateToProps = ({ postViewReducer }) => ({
	post: postViewReducer.post,
	isPostLoading: postViewReducer.isPostLoading || postViewReducer.post === null,
	comments: postViewReducer.comments,
	error: postViewReducer.postError || postViewReducer.commentsError,
});

export default connect(mapStateToProps, { ...postViewActions })(
	PostView,
);