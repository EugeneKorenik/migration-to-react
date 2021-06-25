import React, { Suspense } from 'react';
import NavigationBar from './NavigationBar.jsx';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

const EmptyComponent = React.lazy(() => import('./EmptyComponent'));
const JQueryComponent = React.lazy(() => import('./JQueryComponent'));
const LodashComponent = React.lazy(() => import("./LodashComponent"));
const JspComponent = React.lazy(() => import("./JspComponent"));

const Application = (props) => {

    return (
        <div className="application">
            <h2>Welcome to the internet</h2>
            <h2>This is our new and not legacy application</h2>
            <NavigationBar />
            <Switch>
                {wrapComponent(<EmptyComponent />, '/empty')}
                {wrapComponent(<JQueryComponent />, '/jquery')}
                {wrapComponent(<LodashComponent />, '/lodash')}
                {wrapComponent(<JspComponent />, "/vehicles")}
            </Switch>
            <input type="hidden" value="emptyValue" />
        </div>
    );
};

const wrapComponent = (component, path) => {
    return (
        <Route path={path}>
            <Suspense fallback={<div>Loading...</div>}>
                {component}
            </Suspense>
        </Route>
    );
}

export default Application;