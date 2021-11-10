import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { getCurrentUser } from 'helpers/Utils';
import { getUserProfile } from 'redux/actions';

import TopNav from 'containers/navs/Topnav';
import Sidebar from 'containers/navs/Sidebar';
import AdminSidebar from 'containers/navs/AdminSidebar';
import EVPSidebar from 'containers/navs/EVPSidebar';
import SEVPSidebar from 'containers/navs/SEVPSidebar';


import Footer from 'containers/navs/Footer';

const AppLayout = ({ containerClassnames, getUserProfileAction, userProfile, children, history }) => {

  useEffect(() => {
    getUserProfileAction()
    // eslint-disable-next-line
  }, [])

  return (

    userProfile ?
      <div id="app-container" className={containerClassnames}>
        <TopNav history={history} />
        {
          /* eslint no-nested-ternary:0 */
          userProfile.role === 'superadmin' ? <AdminSidebar /> : userProfile.role === 'superevp' ? <SEVPSidebar /> : userProfile.role === 'evp' ? <EVPSidebar /> : <Sidebar />
        }

        <main>
          <div className="container-fluid">{children}</div>
        </main>
        <Footer />
      </div> : null
  );
};
const mapStateToProps = ({ menu, user }) => {
  const { containerClassnames } = menu;
  const { userProfile } = user;
  return { containerClassnames, userProfile };
};

const mapActionToProps = {
  getUserProfileAction: getUserProfile
};

export default withRouter(
  connect(mapStateToProps, mapActionToProps)(AppLayout)
);
