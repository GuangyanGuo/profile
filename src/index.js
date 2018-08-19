

import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./Store/projectStore";
import App from "./App";
//import {bindActionCreators} from 'redux'
//import {updateCurrent} from './Store/reducers/projects'

//const actions = bindActionCreators({updateCurrent}, store.dispatch)

/*
The only use case for bindActionCreators is when you want to pass some action creators 
down to a component that isn't aware of Redux, and you don't want to pass dispatch or 
the Redux store to it.
*/


/*const render = () => {
  const state = store.getState()
  ReactDOM.render(<App projects = {state.projects}
  currentProject={state.currentProject}
    changeCurrent={actions.updateCurrent}
   />, document.getElementById('root'));
}
render()*/



/*subscribe Adds a change listener. It will be called any time an action is dispatched, 
and some part of the state tree may potentially have changed. 
You may then call getState() to read the current state tree inside the callback.
below the callback is render.
subscribe is called when the dispatch happened, subscribe call render, render get the 
updated state, then render UI
*/
/*store.subscribe(render)

setTimeout(() => {
  store.dispatch({type: 'UPDATE_PROJECTS', payload: {id: 4, thumbnailTitle:'title1', title: 'title1', message:'m1', headerImage:'react.ico'}})
}, 1000)*/

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

