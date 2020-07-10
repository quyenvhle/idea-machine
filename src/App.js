import React, { Component } from 'react';
import Header from './components/Header';
import CardList from './components/CardList';
import Footer from './components/Footer';
import data from './components/data';

import './styles/main.css'
import './App.css';

class App extends Component {
  static defaultProps = { data };

  render() {
    const { data } = this.props;
    console.log(data)
    return (
      <div>
        <Header />
        <CardList data={data} />
        <Footer />
      </div>
    );
  } 
}

export default App;
