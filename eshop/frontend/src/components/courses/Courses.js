import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCourses, deleteCourse } from '../../actions/courses';
import courses from '../../reducers/courses';

export class Courses extends Component {
	static propTypes = {
		courses: PropTypes.array.isRequired,
		getCourses: PropTypes.func.isRequired,
		deleteCourse: PropTypes.func.isRequired,
	};

	componentDidMount() {
		this.props.getCourses();
	};

	render() {
		return (
			<>
				<h2>Courses</h2>
				<table className="table table-stripped">
					<thead>
						<tr>
							<th>Title</th>
							<th>Description</th>
							<th>Price</th>
							<th />
						</tr>
					</thead>
					<tbody>
						{this.props.courses.map(course => (
							<tr key={course.id}>
								<td>{course.title}</td>
								<td>{course.description}</td>
								<td>$ {course.price}</td>
								<td>
									<button onClick={this.props.deleteCourse.bind(this, course.id)} className="btn btn-outline-danger btn-sm">&times;</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</>
		);
	}
};

const mapStateToProps = state => ({
	courses: state.courses.courses
});

export default connect(
	mapStateToProps,
	{getCourses, deleteCourse}
)(Courses);
