import React, { useEffect } from 'react';
// import { injectIntl } from 'react-intl';
import {
    Row,
} from 'reactstrap';

import { connect } from 'react-redux';
import { getActivities } from 'redux/actions';

import { Colxx } from 'components/common/CustomBootstrap';
// import {NavLink } from 'react-dom';
// import Breadcrumb from 'containers/navs/Breadcrumb';

import Table from './ReactTableCards'
// import IconCardsCarousel from './IconCardsCarousel';
// import 'react-quill/dist/quill.snow.css';
// import 'react-quill/dist/quill.bubble.css';

const EVPDashboard = (
    { history,
        // users,
        getAnalytics,
        activities
    }
) => {
    // const { messages } = intl;
    useEffect(() => {
        getAnalytics()
        // eslint-disable-next-line
    }, [])


    return (

        <>

            <Row className='mt-5'>
                <Colxx md='12'>
                    {
                        activities && <Table history={history} activities={activities} />
                    }

                </Colxx>
            </Row>
        </>
    );
};
const mapStateToProps = ({ analytics }) => {
    const { loading, error, message, activities } = analytics;

    return { error, loading, message, activities };
};
export default (connect(mapStateToProps, { getAnalytics: getActivities, }))(EVPDashboard);
