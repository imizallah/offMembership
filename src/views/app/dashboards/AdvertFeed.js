/* eslint-disable react/no-array-index-key */
import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Card, CardBody, CardTitle } from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import moment from 'moment'

const AdvertFeed = ({ adverts }) => {
    console.log(adverts);
    return (
        <Card>
            {/* <div className="position-absolute card-top-buttons">
                <button type="button" className="btn btn-header-light icon-button">
                    <i className="simple-icon-refresh" />
                </button>
            </div> */}
            <CardBody className='pt-2'>
                <CardTitle>
                    <IntlMessages className='font-family-m' id="Advert Feeds" />
                </CardTitle>
                <div className="scroll dashboard-list-with-thumbs" style={{height:'540px'}}>
                    <PerfectScrollbar
                        options={{ suppressScrollX: true, wheelPropagation: false }}
                    >
                        {adverts.map((order, index) => {
                            return (
                                <div key={index} className="mb-3 font-family-m border-bottom">
                                    <div>
                                        <p className='font-weight-bold mb-0'>{order.user.fullName.replace(/\b\w/g, c => c.toUpperCase())}</p>
                                    </div>
                                    <div>
                                        <p className='mb-0'>{order.message}</p>
                                    </div>
                                    <div className='text-right'>
                                        <p className='font-weight-light mb-0'>{moment(order.createdAt).format('MMMM Do YYYY, h:mm:ss a').split(',')[1]}</p>
                                    </div>

                                </div>
                            );
                        })}
                    </PerfectScrollbar>
                </div>
            </CardBody>
        </Card>
    );
};
export default AdvertFeed;
