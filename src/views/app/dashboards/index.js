import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
// import SuperEVP from './Advertiser';
// import { ProtectedRoute, UserRole } from 'helpers/authHelper';

const DashboardDefault = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-default" */ './default')
);
const ContentDefault = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-content" */ './content')
);
const AnalyticsDefault = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-analytics" */ './analytics')
);
const EcommerceDefault = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-ecommerce" */ './ecommerce')
);
const Membership = React.lazy(() =>
import(/* webpackChunkName: "dashboard-ecommerce" */ './membership')
);
const Sevp =React.lazy(()=>
  import(/* webpackChunkName: "dashboard-ecommerce" */ './sevp')
)
const EVPDetails=React.lazy(()=>
import(/* webpackChunkName: "dashboard-ecommerce" */ './evpDetails')
)

const NewEVP=React.lazy(()=>
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
        path={`${match.url}/content`}
        render={(props) => <ContentDefault {...props} />}
      />
      <Route
        path={`${match.url}/ecommerce`}
        render={(props) => <EcommerceDefault {...props} />}
      />
      <Route
        path={`${match.url}/analytics`}
        render={(props) => <AnalyticsDefault {...props} />}
      />
      <Route
        path={`${match.url}/membership/:role`}
        render={(props) => <Membership {...props} />}
      />
        <Route
        path={`${match.url}/sevp`}
        render={(props) => <Sevp {...props} />}
      />
        <Route
        path={`${match.url}/evp/details/:userId`}
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
