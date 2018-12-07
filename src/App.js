import React, { Component } from 'react';
import Header from './components/layout/header';
import Dashboard from './components/dashboard/dashboard';




class App extends Component {
  render() {
    return (
      <div >
        <Header />
        <Dashboard />
      </div>
    );
  }
}

export default App;
