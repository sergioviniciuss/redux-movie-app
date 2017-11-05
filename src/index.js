import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { requestMovies } from './movieApi';
import { MOVIES_LOADED } from './actions';

requestMovies().then(movies => store.dispatch({ type: MOVIES_LOADED, movies }));