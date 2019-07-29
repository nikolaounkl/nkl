import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    darkMode: true
  }
  toggleTheme= () => {
    this.setState({ darkMode: !this.state.darkMode });
  }
  render() {
    return (
      <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;

