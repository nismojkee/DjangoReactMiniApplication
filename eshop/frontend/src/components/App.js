import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Dashboard from './courses/Dashboard';
import Header from './layouts/Header';

import { Provider } from 'react-redux';
import store from '../store';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Header />
				<Dashboard />
			</Provider>
		)
	}
};

ReactDOM.render(
	<App />,
	document.getElementById('app')
);