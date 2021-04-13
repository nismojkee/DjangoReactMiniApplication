import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCourse } from '../../actions/courses';

export class Form extends Component {
	state = {
		title: '',
		description: '',
		price: 0,
	};

	static propTypes = {
		addCourse: PropTypes.func.isRequired
	};

	onChange = e => this.setState({
		[e.target.name]: e.target.value
	});

	onSubmit = e => {
		e.preventDefault();
		const {title, description, price } = this.state;
		const course = { title, description, price };
		this.props.addCourse(course);
	};

	render() {
		const { title, description, price } = this.state;

		return (
			<div className="card card-body m-4">
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Title</label>
						<input
							className="form-control"
							type="text"
							name="title"
							onChange={this.onChange}
							value={title}
						/>
					</div>
					<div className="form-group">
						<label>Description</label>
						<textarea
							className="form-control"
							name="description"
							onChange={this.onChange}
							value={description}
						/>
					</div>
					<div className="form-group">
						<label>Price</label>
						<input
							className="form-control"
							type="number"
							name="price"
							onChange={this.onChange}
							value={price}
						/>
					</div>

					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
		);
	};
};

export default connect(
	null,
	{addCourse}
)(Form);
