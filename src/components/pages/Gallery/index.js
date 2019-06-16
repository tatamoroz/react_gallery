import React, { useEffect } from 'react';
import List from './views/List';
import { connect } from 'react-redux';
import { getPhotos } from '../../../utils/PhotoApiService';
import './style.scss';
import { id } from 'postcss-selector-parser';

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

const mapDispatchToProps = dispatch => ({
  setPhotos: photos => dispatch({ type: 'SET_PHOTOS', photos }),
  setFavorite: photo => dispatch({ type: 'SET_FAVORITE', photo })
})

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
