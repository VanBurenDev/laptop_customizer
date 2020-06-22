import React, {Component} from 'react';
import slugify from 'slugify';
import Features from './Features';
import Summary from './Summary';
import Total from './Total';

import './App.css';

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    console.log(selected)
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            <Features 
              idx={featureHash}
              feature = {Object.keys(this.props.features)}
            />
          </form>
          <section className="main__summary">
            <h2>Your cart</h2>
            <Summary

            />
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <Total

              />
            </div>
          </section>
        </main>
      </div>
    );
  }
}