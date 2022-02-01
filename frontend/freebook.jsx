import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { login, logout } from './actions/session_actions'
import humps from 'humps'

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
  // testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.humps = humps;
  window.logout = logout;


  

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);
});

$(window).scroll(function (event) {
  let scrollHeight = $(window).scrollTop();
  let profilePicsHeight = $('#profilePicsContainerTopOfPage').height();
  let copyrightHeight = $('#profileBottomCopyrightContainer').height();
  let lifeHeight = $('#profileBottomLifeContainer').height();
  let friendsHeight = $('#profileBottomFriendsContainer').height();
  let photosHeight = $('#profileBottomPhotosContainer').height();
  let introHeight = $('#profileBottomLeftSide').height();
  let windowHeight = $(window).height();
  if (scrollHeight  + windowHeight > introHeight + photosHeight + friendsHeight + lifeHeight + copyrightHeight  + 40) {
    $('#profileBottomLeftSide').addClass('fixLeftSide');
    $('#profileBottomLeftSide2').removeClass('hideLeftSide');
    $('#profileBottomLeftSide').css('top', `-${profilePicsHeight + copyrightHeight + 40}px`);
   } 
  if (scrollHeight  + windowHeight < introHeight + photosHeight + friendsHeight + lifeHeight + copyrightHeight  - 40 - profilePicsHeight - copyrightHeight) {
    $('#profileBottomLeftSide').removeClass('fixLeftSide');
    $('#profileBottomLeftSide2').addClass('hideLeftSide');
  }
})