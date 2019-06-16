import React, { useEffect } from 'react';
import { getPhoto } from '../../../utils/PhotoApiService';
import { connect } from 'react-redux';
import './style.scss';


function Photo(props) {

    const { match: { params: { photoId } }, setPhoto } = props;

    useEffect(() => {

        getPhoto(photoId).then(photo => {
            setPhoto(photo)
        });

    }, [photoId, setPhoto]);

    const { urls, updated_at, alt_description, } = props.photo;

    const renderDate = () => {
        const date = new Date(updated_at);
        return date.toLocaleDateString('ru-RU');
    }

    return (
        <div className="main-photo">
            <div className="photo-header">
                <i>{renderDate()}</i>
                <p>{alt_description}</p>
            </div>
            {urls && <img src={urls.regular} alt={alt_description} />}
        </div>
    );
}

/*</div>function Photo(props) {

    const {urls: {thumb}, updated_at, alt_description, likes } = props.data;
        
    const renderDate = () => {
        const date = new Date(updated_at);
            return date.toLocaleDateString('ru-RU');
        }
    
        return (
        <div className="photo">
                <span>{likes}</span>
                <i>{renderDate()}</i>
                <img src={thumb} alt={alt_description} />
                <p>{alt_description}</p>
            </div>
            );
        } */

const mapStateToProps = state => ({
    photo: state.photo.data
})

const mapDispatchToProps = dispatch => ({
    setPhoto: photo => dispatch({ type: 'SET_PHOTO', photo })
})

export default connect(mapStateToProps, mapDispatchToProps)(Photo);