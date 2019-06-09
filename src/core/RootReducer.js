import { combineReducers } from 'redux';

import app from '../components/App/redux/reducer';
import gallery from '../components/pages/Gallery/redux/reducer';

export default combineReducers({
    app,
    gallery,
})