import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import postsReducer from './posts_reducer';
import commentsReducer from './comments_reducer';
import likesReducer from './likes_reducer';
import friendsReducer from './friends_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer,
    likes: likesReducer,
    friends: friendsReducer
});

export default entitiesReducer;