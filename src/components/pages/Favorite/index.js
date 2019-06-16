import React from 'react';
import List from './views/List';
import { connect } from 'react-redux';
import './style.scss';

function Favorite(props) {

  const { removeFavorite, photos } = props;

  return (
    <div className="favorite">
    <List photos={photos} removeFavorite={removeFavorite}/>
    </div>
  );
}

const mapStateToProps = state => ({
  photos: state.favorite.photos
})

const mapDispatchToProps = dispatch => ({
  removeFavorite: id => dispatch({ type: 'REMOVE_FAVORITE', id })
})

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);