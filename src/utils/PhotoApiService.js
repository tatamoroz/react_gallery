const CLIENT_ID = 'ca5a2a324ba06f2cf8bede88a989bb6c2f5f87730032b3c6256b72888f2cc94c';
const API_URL = 'https://api.unsplash.com/photos/';


export const getPhotos = (pageNum = 1, limit = 10) => {
    const photos_url = `${API_URL}?page=${pageNum}&&per_page=${limit}&&client_id=${CLIENT_ID}`;

    return fetch(photos_url)
        .then(response => {
            return response.json();
        })
}
export const getPhoto = photoId => {
    const photo_url = `${API_URL}${photoId}/?client_id=${CLIENT_ID}`;

    return fetch(photo_url)
        .then(response => {
            return response.json();
        })
}