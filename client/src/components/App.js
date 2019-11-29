import React from "react";
import {Router,Route,Switch} from 'react-router-dom';

import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history'
const App = ()=>{
    return(
        <div>
            <Router history={history}>
                <div className="ui container">
                    <Header />
                    <Switch>
                        <Route path="/" exact component={StreamList} />
                        <Route path="/streams/new" exact component={StreamCreate} />
                        <Route path="/Streams/edit/:id" exact component={StreamEdit} />
                        <Route path="/streams/:id" exact component={StreamShow} />
                        <Route path="/streams/delete/:id" exact component={StreamDelete} />
                    </Switch>

                </div>
            </Router>
        </div>
    );
}
export default App;