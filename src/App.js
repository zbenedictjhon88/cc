import React from 'react';
import Head from './parts/Header';
import Foot from './parts/Footer';
import Home from './pages/Home';

class App extends React.Component {
  render() {
    return (
      <div>
        <Head />
        <Home />
        <Foot />
      </div>
    )
  };
}
export default App;
