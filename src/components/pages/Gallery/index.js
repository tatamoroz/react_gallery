import React, { useEffect } from 'react';
import List from './views/List';
import { connect } from 'react-redux';
import { getPhotos } from '../../../utils/PhotoApiService';
import { setFavoriteAction,setPhotosAction } from './redux/actions';
import './style.scss';

function Gallery(props) {

  const { setPhotos, photos, setFavorite } = props;

  useEffect(() => {

    getPhotos()
      .then(photos => {
        setPhotos(photos);
      });

  }, [setPhotos]);

  return (
    <div className="gallery">
    <List photos={photos} setFavorite={setFavorite}/>
    </div>
  );
}

const mapStateToProps = state => ({
  photos: state.gallery.photos
})

const mapDispatchToProps = {
  setPhotos: setPhotosAction,
  setFavorite: setFavoriteAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
