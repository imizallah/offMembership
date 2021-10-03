import React from 'react';
// import { injectIntl } from 'react-intl';
import {
    Row, 
} from 'reactstrap';

import { Colxx } from 'components/common/CustomBootstrap';
// import {NavLink } from 'react-dom';
// import Breadcrumb from 'containers/navs/Breadcrumb';

import Table from './ReactTableCards'
import IconCardsCarousel from './IconCardsCarousel';
// import 'react-quill/dist/quill.snow.css';
// import 'react-quill/dist/quill.bubble.css';

const EVPDashboard = (
    {history}
) => {
    // const { messages } = intl;



    return (

        <>
            <Row>
                <Colxx lg="12" xl="12" md='12' className='mb-4'>
                    <IconCardsCarousel />
                </Colxx>
            </Row>
            <Row className='mt-5'>
                <Colxx md='12'>
                    <Table history={history} />
                </Colxx>
            </Row>
        </>
    );
};
export default EVPDashboard;
