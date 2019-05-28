import React from 'react';
import './App.css';

import Site from './site';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: setTimeout(() => { this.setState({ loading: false }) }, 4000)
    };
  }
  Loader = (Component) => {
    if (!this.state.loading) return Component
    return (<span className="spin">
      <div className="loadingLogo">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"  />
       <i class="fas fa-spinner "></i>
      </div>
      </span>)
  }
  render() {
    return (
      <div>
        {this.Loader(<Site />)}
      </div>

    );
  }
}