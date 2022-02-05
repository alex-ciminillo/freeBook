import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
  const preloadedState = {
    entities: {
      users: { [window.currentUser.id]: window.currentUser }
    },
    session: { id: window.currentUser.id }
  };
  store = configureStore(preloadedState);
  delete window.currentUser;
} else {
  store = configureStore();
}
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);
});

$(window).scroll(function (event) {
  let scrollHeight = $(window).scrollTop();
  let profilePicsHeight = $('#profilePicsContainerTopOfPage').height();
  let copyrightHeight = $('#profileBottomCopyrightContainer').height();
  let friendsHeight = $('#profileBottomFriendsContainer').height();
  let photosHeight = $('#profileBottomPhotosContainer').height();
  let introHeight = $('#profileBottomLeftSide').height();
  let windowHeight = $(window).height();
  if (scrollHeight  + windowHeight > introHeight + photosHeight + friendsHeight + copyrightHeight  + 170) {
    $('#profileBottomLeftSide').addClass('fixLeftSide');
    $('#profileBottomLeftSide2').removeClass('hideLeftSide');
    $('#profileBottomLeftSide').css('top', `-${profilePicsHeight + copyrightHeight - 210}px`);
   } 
  if (scrollHeight  + windowHeight < introHeight + photosHeight + friendsHeight + copyrightHeight  - 90 - profilePicsHeight - copyrightHeight) {
    $('#profileBottomLeftSide').removeClass('fixLeftSide');
    $('#profileBottomLeftSide2').addClass('hideLeftSide');
  }
})