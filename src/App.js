import React, { Component } from 'react';

import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';

import Header from './components/Header/Toolbar';
// import Header from './navtest/Toolbar';

export default class App extends Component {
  state = {
    data: null,
  };

  fetchData() {
    (async () => {
      try {
        const data = await (await fetch('/data.json')).json();
        if (!data) return console.log('No data');
        this.setState({ data });
      } catch (err) {
        console.log(err);
      }
    })();
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { data } = this.state;

    if (!data) return null;

    return (
      <div className="App">
        <Header id="top" />

        <HeroSection data={data} />
        <About data={data} />
        <Skills data={data} />
        <Projects data={data} />
        <Contact data={data} />
        <Footer data={data} />
      </div>
    );
  }
}
