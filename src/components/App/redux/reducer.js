
const initialState = {
    name: 'APP',
}

export default function (state = initialState, action) {
    console.log('REDUCER APP', action)
    return state
}