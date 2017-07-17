//import 'babel-core/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';


import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import configureStore from './store';
import App from './containers/App';
import Gallery from './components/Gallery';
import VrView from './components/VrView';
import Error from './components/Error';
import ExpectedError from './components/ExpectedError';
import Home from './components/Home';
import {fetchData} from './actions/actions';

const history = new createBrowserHistory();
const store = configureStore();

function loadData() {
	store.dispatch(fetchData('https://demo0813639.mockable.io/getPanos'));
};

//we expect this to fail and get forwarded to the error page
function loadBadData(){
	store.dispatch(fetchData('https://restcountries.eu/rest/v1/callingcode/123123'));
};

ReactDOM.render(
	<Provider store={store}>
		<ReduxRouter>
			<Route history={history}>
				<Route component={App}>
					<Route path='/' component={Gallery} onEnter={loadData} />
					
					<Route path='/othercountry' component={ExpectedError} onEnter={loadBadData} />
					<Route path='/vr/:imgurl' component={VrView} />
					<Route path='/error' component={Error} />
				</Route>
			</Route>
		</ReduxRouter>
	</Provider>,
	document.getElementById('root')
);
