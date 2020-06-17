import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import Home from "./components/Home"
import { Container } from 'reactstrap'
import { Provider } from 'react-redux'
import store from './store'
import TrackDetail from './components/TrackDetail'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <NavBar />
            <Container>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/tracks/play/:slug' component={TrackDetail} />
              </Switch>
            </Container>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
