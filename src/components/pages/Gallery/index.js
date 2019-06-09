import React, { useEffect } from 'react';
import List from './views/List';
import { connect } from 'react-redux';
import { getPhotos } from './service';
import './style.scss';

function Gallery(props) {

  const { setPhotos, photos } = props;

  useEffect(() => {

    getPhotos()
      .then(photos => {
        setPhotos(photos);
      });

  }, [])

  return (
    <div className="gallery">
    <List photos={photos} />
    </div>
  );
}

const mapStateToProps = state => ({
  photos: state.gallery.photos
})

const mapDispatchToProps = dispatch => ({
  setPhotos: photos => dispatch({ type: 'SET_PHOTOS', photos })
})

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
