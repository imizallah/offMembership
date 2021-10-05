import React, { useState, useEffect } from 'react';
import { injectIntl } from 'react-intl';
import {
    Row
} from 'reactstrap';
import { connect } from 'react-redux';
import { createAdvert, getUserAdvert, deleteAdvert, updateAdvert } from 'redux/actions';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import AdvertFeed from './AdvertFeed';
import PostAdvert from './PostAdvert';
import EditingAdvert from './EditingAdvert';


import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';

const AdvertCenter = ({
    createAdvertRequest,
    createAdvertLoading,
    getAdvertRequest,
    deleteAdvertRequest,
    updateAdvertRequest,
    editAdvertLoading,
    userAdverts }
) => {

    const [editing, updateEditing] = useState(false);
    const [editingAdvert, setEditingAdvert] = useState('')


    useEffect(() => {
        getAdvertRequest()
        console.log(userAdverts);
        // eslint-disable-next-line
    }, [])
    // const { messages } = intl;
    const [advertFeed, updateAdvertFeed] = useState([]);

    const postAdvert = (message) => {
        console.log(message);
        const data = { message }
        createAdvertRequest(data);
    }

    useEffect(() => {
        updateAdvertFeed(userAdverts);
        updateEditing(false);
        // console.log(advertFeed)
// eslint-disable-next-line
    }, [userAdverts])


    return (
        <>
            <h2>Advert Center</h2>
            <Separator />
            <Row className='mt-4'>
                <Colxx lg="6" xl="6" md='6' className="mb-4">
                    {
                        editing ?
                            <EditingAdvert
                                editAdvert={editingAdvert}
                                updateAdvert={updateAdvertRequest}
                                editAdvertLoading={editAdvertLoading}
                            /> :
                            <PostAdvert
                                createAdvertLoading={createAdvertLoading}
                                postAdvert={postAdvert}
                            />
                    }

                </Colxx>
                <Colxx lg="6" xl="6" md='6' className="mb-4">
                    {userAdverts && <AdvertFeed
                        adverts={advertFeed.reverse()}
                        deleteAdvert={deleteAdvertRequest}
                        setEdit={updateEditing}
                        setEditingAdvert={setEditingAdvert}
                    />}
                </Colxx>
            </Row>
        </>
    );
};
const mapStateToProps = ({ advert }) => {
    const { loading, createAdvertLoading,editAdvertLoading, error, message, userAdverts } = advert;
    return { createAdvertLoading,editAdvertLoading, error, loading, message, userAdverts };
};
export default injectIntl(connect(mapStateToProps, { createAdvertRequest: createAdvert, getAdvertRequest: getUserAdvert, deleteAdvertRequest: deleteAdvert, updateAdvertRequest: updateAdvert })(AdvertCenter))