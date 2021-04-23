import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MainBoard, Login, Register, Timetable, Post } from "@/containers";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "@/reducers";
import thunk from "redux-thunk";

const store = createStore(reducers, applyMiddleware(thunk));

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={MainBoard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/timetable" component={Timetable} />
        <Route exact path="/board/:board_idx" component={Post} />
      </Switch>
    </Router>
  </Provider>,
  rootElement
);