import React, { useState } from 'react';
import {
    Card, CardBody, CardTitle, Button, Input
} from 'reactstrap';

const PostAdvert = ({
     editAdvertLoading,
    editAdvert,
    updateAdvert,
}) => {
    const [message, setMessage] = useState(editAdvert.message);

    return (
        <Card>
            <CardBody>
                <CardTitle className='font-weight-bold'>
                    Edit Advert
                </CardTitle>

                <Input
                    type='textarea'
                    cols='30'
                    rows='11'
                    defaultValue={editAdvert.message}
                    required
                    style={{ resize: 'none' }}
                    className=" w-100"
                    name="description"

                    onChange={(e) => setMessage(e.target.value)}
                // validate={validateDescription}
                />


                <div>
                    <Button color='primary'
                        disabled={(message === '')}
                        /* eslint no-underscore-dangle: 0 */
                        onClick={() => { updateAdvert(message,editAdvert._id) }}
                        className={`font-weight-light  my-3 btn-multiple-state ${ editAdvertLoading ? 'show-spinner' : ''
                            }`}
                    >
                        <span className="spinner d-inline-block">
                            <span className="bounce1" />
                            <span className="bounce2" />
                            <span className="bounce3" />
                        </span>
                        <span className="label">
                            Save
                        </span>
                    </Button>
                </div>

            </CardBody>
        </Card>
    )

}
export default PostAdvert;