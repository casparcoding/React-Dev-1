import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from "./store/configureStore";
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';

import './index.css';
import App from './routes/friends/components/App';
import registerServiceWorker from './registerServiceWorker';
import NotFound from "./common/not-found";

import {getQuery} from "./routes/friends/modules/friends-actions";

import createHistory from 'history/createBrowserHistory';
const history = createHistory();


const store = configureStore();


// listen to the location url props and if changes dispatch new action updated history

history.listen(location => {

    let x = location.search.split('=')[1];

    if(x !== undefined){
        store.dispatch(getQuery(x));
    }

});

const RouterConfig = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact  render={props => <App {...props} />}/>
            <Route path='*' component={NotFound}/>
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(
    <Provider store={store}>
        <RouterConfig />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();

