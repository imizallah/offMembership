import React, { useEffect } from 'react';
// import { injectIntl } from 'react-intl';
import {
    Row,
} from 'reactstrap';

import { connect } from 'react-redux';
import { getUser } from 'redux/actions';

import { Colxx } from 'components/common/CustomBootstrap';
// import {NavLink } from 'react-dom';
// import Breadcrumb from 'containers/navs/Breadcrumb';

import Table from './ReactTableCards'
// import IconCardsCarousel from './IconCardsCarousel';
// import 'react-quill/dist/quill.snow.css';
// import 'react-quill/dist/quill.bubble.css';

const EVPDashboard = (
    { history,
        users,
        getUserRequest,
    }
) => {
    // const { messages } = intl;
    useEffect(() => {
        getUserRequest()
        // eslint-disable-next-line
    }, [])


    return (

        <>

            <Row className='mt-5'>
                <Colxx md='12'>
                    <Table history={history} sevp={users} />
                </Colxx>
            </Row>
        </>
    );
};
const mapStateToProps = ({ user }) => {
    const { loading,  error, message, users } = user;
    return {  error, loading, message, users };
};
export default (connect(mapStateToProps, { getUserRequest: getUser }))(EVPDashboard);
