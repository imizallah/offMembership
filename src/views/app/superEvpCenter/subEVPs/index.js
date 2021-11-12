import React, { useEffect } from 'react';
// import { injectIntl } from 'react-intl';
import {
    Row,
    // Button
} from 'reactstrap';

import { connect } from 'react-redux';
import { getSEVP, getUserProfile, getMyUsers } from 'redux/actions';
// import { getCurrentUser } from 'helpers/Utils';
// import {   } from 'redux/actions';

import { Colxx } from 'components/common/CustomBootstrap';
// import {NavLink } from 'react-dom';
// import Breadcrumb from 'containers/navs/Breadcrumb';

import Table from './ReactTableCards'
import IconCardsCarousel from '../Home/IconCardsCarousel';
// import 'react-quill/dist/quill.snow.css';
// import 'react-quill/dist/quill.bubble.css';

const EVPDashboard = (
    { history,
        sevp,
        getSEVPRequest,
        userProfile,
        myUsers,
        getUserProfileAction,
        getMyUsersAction,
    }
) => {
    // const { messages } = intl;
    useEffect(() => {
        getSEVPRequest()

        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        getMyUsersAction()
        // eslint-disable-next-line
    }, [])



    useEffect(() => {
        getUserProfileAction()
        // eslint-disable-next-line
    }, [])


    // const currentUser = getCurrentUser();

    return (

        <>
            <Row>
                <Colxx lg="12" xl="12" md='12' className='mb-4'>
                    {(userProfile && myUsers) && <IconCardsCarousel
                        history={history}
                        user={userProfile}
                        myUsers={myUsers}
                    />}
                </Colxx>
            </Row>

            <Row className='mt-5'>
                <Colxx md='12'>
                    <Table history={history} sevp={sevp} />
                </Colxx>
            </Row>
        </>
    );
};
const mapStateToProps = ({ subEVP, user }) => {
    const { loading, getSEVPLoading, SEVPError, message, sevp } = subEVP;
    const { userProfile, myUsers } = user;

    return { getSEVPLoading, SEVPError, loading, message, sevp, userProfile, myUsers };
};
export default (connect(mapStateToProps, { getUserProfileAction: getUserProfile, getMyUsersAction: getMyUsers, getSEVPRequest: getSEVP }))(EVPDashboard);
