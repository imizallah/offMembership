import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
// import SuperEVP from './Advertiser';
// import { ProtectedRoute, UserRole } from 'helpers/authHelper';

const DashboardDefault = React.lazy(() =>
    import(/* webpackChunkName: "dashboard-default" */ './home')
);


const EVPDetails = React.lazy(() =>
    import(/* webpackChunkName: "dashboard-ecommerce" */ './evpDetails')
)

const NewEVP = React.lazy(() =>
    import(/* webpackChunkName: "dashboard-ecommerce" */ './AddNewEVP')
)

const Dashboards = ({ match }) => (
    <Suspense fallback={<div className="loading" />}>
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/home`} />
            <Route
                path={`${match.url}/home`}
                render={(props) => <DashboardDefault {...props} />}
            />
            <Route
                path={`${match.url}/evp/details`}
                render={(props) => <EVPDetails {...props} />}
            />
            <Route
                path={`${match.url}/add-new-evp`}
                render={(props) => <NewEVP {...props} />}
            />

            {/*  */}
            {/* <ProtectedRoute
        path={`${match.url}/default`}
        component={DashboardDefault}
        roles={[UserRole.Admin]}
      />
      <ProtectedRoute
        path={`${match.url}/content`}
        component={ContentDefault}
        roles={[UserRole.Admin]}
      />
      <ProtectedRoute
        path={`${match.url}/ecommerce`}
        component={EcommerceDefault}
        roles={[UserRole.Editor]}
      />
      <ProtectedRoute
        path={`${match.url}/analytics`}
        component={AnalyticsDefault}
        roles={[UserRole.Editor]}
      /> */}


            <Redirect to="/error" />
        </Switch>
    </Suspense>
);
export default Dashboards;
