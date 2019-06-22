export const SET_PHOTOS = 'SET_PHOTOS';
export const SET_FAVORITE = 'SET_FAVORITE';

export const setPhotosAction = photos => ({ type: SET_PHOTOS, photos });
export const setFavoriteAction = photo => ({ type: SET_FAVORITE, photo });
