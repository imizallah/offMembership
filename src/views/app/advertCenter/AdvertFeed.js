/* eslint-disable react/no-array-index-key */
import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Card, CardBody, CardTitle } from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
// import moment from 'moment'
import { MdDelete } from 'react-icons/md'
import { BiEdit } from 'react-icons/bi'

const AdvertFeed = ({
    adverts,
    deleteAdvert,
    setEdit,
    setEditingAdvert
}) => {

    // editAdvert = { updateAdvertRequest }
    // setEdit = { updateEditing }
    // setEditingAdvert = { setEditingAdvert }
    // console.log(adverts);

    const handleAdvertEdit=(advert)=>{
        setEditingAdvert(advert)
        setEdit(true);
    }

    return (
        <Card style={{ maxHeight: 'auto' }}>
            {/* <div className="position-absolute card-top-buttons">
                <button type="button" className="btn btn-header-light icon-button">
                    <i className="simple-icon-refresh" />
                </button>
            </div> */}
            <CardBody className='pt-2'>
                <CardTitle>
                    <IntlMessages className='font-family-m' id="Advert Feeds" />
                </CardTitle>
                <div style={{ height: '317px' }} className="scroll dashboard-list-with-thumbs" >
                    <PerfectScrollbar
                        options={{ suppressScrollX: true, wheelPropagation: false }}
                    >
                        {adverts.map((order, index) => {
                            return (
                                <div key={index} className="mb-3 font-family-m border-bottom d-flex justify-content-between">
                                    {/* <div>
                                        <p className='font-weight-bold mb-0'>{order.user.fullName.replace(/\b\w/g, c => c.toUpperCase())}</p>
                                    </div> */}
                                    <div>
                                        <p className='mb-2'>{order.message}</p>
                                    </div>
                                    <div className='text-right d-flex top-right'>
                                        <BiEdit size='16px' color='' className='mr-1' style={{ cursor: 'pointer' }} onClick={()=>{handleAdvertEdit(order)}}/>
                                        {/* eslint no-underscore-dangle: 0 */}
                                        <MdDelete size='16px' color='#dc3545' style={{ cursor: 'pointer' }} onClick={() => { deleteAdvert(order._id) }} />
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
