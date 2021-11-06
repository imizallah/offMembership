import React, { useEffect } from 'react';
// import { injectIntl } from 'react-intl';
import {
    Row,
} from 'reactstrap';

import { connect } from 'react-redux';
import { getSEVP } from 'redux/actions';
import { getCurrentUser } from 'helpers/Utils';

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
    }
) => {
    // const { messages } = intl;
    useEffect(() => {
        getSEVPRequest()
        // eslint-disable-next-line
    }, [])

    const currentUser = getCurrentUser();

    return (

        <>
            <Row>
                <Colxx lg="12" xl="12" md='12' className='mb-4'>
                    <IconCardsCarousel 
                    user={currentUser}/>
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
const mapStateToProps = ({ subEVP }) => {
    const { loading, getSEVPLoading, SEVPError, message, sevp } = subEVP;
    return { getSEVPLoading, SEVPError, loading, message, sevp };
};
export default (connect(mapStateToProps, { getSEVPRequest: getSEVP }))(EVPDashboard);
