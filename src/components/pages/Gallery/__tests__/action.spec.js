import { photos } from '../mock'
import {
    setFavoriteAction,
    setPhotosAction,
    SET_FAVORITE,
    SET_PHOTOS
} from '../redux/actions';

test('should return SET_PHOTOS action', () => {
    expect(setPhotosAction(photos)).toEqual({
        type: SET_PHOTOS,
        photos: photos,
    });
});

test('should return SET_FAVORITE action', () => {
    expect(setFavoriteAction(photos[0])).toEqual({
        type: SET_FAVORITE,
        photo: photos[0],
    });
});