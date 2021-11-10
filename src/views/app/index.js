import React, { Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from 'layout/AppLayout';
// import { ProtectedRoute, UserRole } from 'helpers/authHelper';

const Dashboards = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './dashboards')
);
const SEVPDashboard = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './sevpDashboard')
);
const EVPDashboard = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './evpDashboard')
);
const SuperEVPCenter = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './superEvpCenter')
);
const SuperAdminDashboard = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './superAdminDashboard')
);
const KnowledgebaseSettings = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './knowledgebaseSettings')
);
const Knowledgebase = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './knowledgebase')
);
const Settings = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './settings')
);
const EVPCenter = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './evpCenter')
);

const AdvertCenter = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './advertCenter')
);


const MembershipPayment = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './membershipPayment')
);


const AccountFunding = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './accountFunding')
);


const User = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './userManagement')
);

const Pages = React.lazy(() =>
  import(/* webpackChunkName: "pages" */ './pages')
);
const Applications = React.lazy(() =>
  import(/* webpackChunkName: "applications" */ './applications')
);
const Ui = React.lazy(() => import(/* webpackChunkName: "ui" */ './ui'));
const Menu = React.lazy(() => import(/* webpackChunkName: "menu" */ './menu'));
const BlankPage = React.lazy(() =>
  import(/* webpackChunkName: "blank-page" */ './blank-page')
);

const App = ({ match }) => {
  return (
    <AppLayout>
      <div className="dashboard-wrapper">
        <Suspense fallback={<div className="loading" />}>
          <Switch>
            <Redirect
              exact
              from={`${match.url}/`}
              to={`${match.url}/dashboards`}
            />
            <Route
              path={`${match.url}/dashboards`}
              render={(props) => <Dashboards {...props} />}
            />
            <Route
              path={`${match.url}/sevp`}
              render={(props) => <SEVPDashboard {...props} />}
            />
            <Route
              path={`${match.url}/evp`}
              render={(props) => <EVPDashboard {...props} />}
            />
            <Route
              path={`${match.url}/super-evp`}
              render={(props) => <SuperEVPCenter {...props} />}

            />

            <Route
              path={`${match.url}/super-admin`}
              render={(props) => <SuperAdminDashboard {...props} />}
            />
            <Route
              path={`${match.url}/evp-center`}
              render={(props) => <EVPCenter {...props} />}

            />

            <Route
              path={`${match.url}/users`}
              render={(props) => <User {...props} />}

            />

            <Route
              path={`${match.url}/advert-center`}
              render={(props) => <AdvertCenter {...props} />}

            />

            <Route
              path={`${match.url}/set-knowledgebase`}
              render={(props) => <KnowledgebaseSettings {...props} />}

            />
            <Route
              path={`${match.url}/knowledgebase`}
              render={(props) => <Knowledgebase {...props} />}

            />
            <Route
              path={`${match.url}/settings`}
              render={(props) => <Settings {...props} />}

            />
            <Route
              path={`${match.url}/membership-payment/:membershipId`}
              // component={Transaction}
              render={(props) => <MembershipPayment {...props} />}
            />

            <Route
              path={`${match.url}/account-funding`}
              // component={Transaction}
              render={(props) => <AccountFunding {...props} />}
            />

            <Route
              path={`${match.url}/applications`}
              render={(props) => <Applications {...props} />}
            />
            {/* <ProtectedRoute
                    path={`${match.url}/applications`}
                    component={Applications}
                    roles={[UserRole.Admin]}
            /> */}
            <Route
              path={`${match.url}/pages`}
              render={(props) => <Pages {...props} />}
            />
            <Route
              path={`${match.url}/ui`}
              render={(props) => <Ui {...props} />}
            />
            <Route
              path={`${match.url}/menu`}
              render={(props) => <Menu {...props} />}
            />
            <Route
              path={`${match.url}/blank-page`}
              render={(props) => <BlankPage {...props} />}
            />
            <Redirect to="/error" />
          </Switch>
        </Suspense>
      </div>
    </AppLayout>
  );
};

const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(connect(mapStateToProps, {})(App));
