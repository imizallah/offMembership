import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
// import SuperEVP from './Advertiser';
// import { ProtectedRoute, UserRole } from 'helpers/authHelper';

const DashboardDefault = React.lazy(() =>
    import(/* webpackChunkName: "dashboard-default" */ './Home/index')
);


const Dashboards = ({ match }) => (
    <Suspense fallback={<div className="loading" />}>
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/home`} />
            <Route
                path={`${match.url}/home`}
                render={(props) => <DashboardDefault {...props} />}
            />
          


            <Redirect to="/error" />
        </Switch>
    </Suspense>
);
export default Dashboards;
