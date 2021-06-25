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

const Application = (props) => {
    return (
        <div className="application">
            <NavigationBar />
            <Switch>
                <Route path="/empty">
                    <Suspense fallback={<div>Loading...</div>}>
                        <EmptyComponent />
                    </Suspense>
                </Route>
            </Switch>
            <Switch>
                <Route path="/jquery">
                    <Suspense fallback={<div>Loading...</div>}>
                        <JQueryComponent />
                    </Suspense>
                </Route>
            </Switch>
            <Switch>
                <Route path="/lodash">
                    <Suspense fallback={<div>Loading...</div>}>
                        <LodashComponent />
                    </Suspense>
                </Route>
            </Switch>
            <input type="hidden" value="emptyValue" />
        </div>
    );
};

export default Application;