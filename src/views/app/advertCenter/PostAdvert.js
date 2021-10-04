import React, {useState} from 'react';
import {
    Card, CardBody, CardTitle, Button, Input
} from 'reactstrap';

const PostAdvert = ({
    createAdvertLoading,
    postAdvert
}) => {
  const [message, setMessage] = useState('');

    return (
        <Card>
            <CardBody>
                <CardTitle className='font-weight-bold'>
                    Post an Advert
                </CardTitle>

                <Input
                    type='textarea'
                    cols='30'
                    rows='11'
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
                        onClick={() => { postAdvert(message) }}
                        className={`font-weight-light  my-3 btn-multiple-state ${createAdvertLoading ? 'show-spinner' : ''
                            }`}
                    >
                        <span className="spinner d-inline-block">
                            <span className="bounce1" />
                            <span className="bounce2" />
                            <span className="bounce3" />
                        </span>
                        <span className="label">
                            Post Advert
                        </span>
                    </Button>
                </div>

            </CardBody>
        </Card>
    )

}
export default PostAdvert;