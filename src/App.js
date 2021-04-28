import logo from './logo.svg';
import './App.css';
import { css } from 'glamor'

import { withAuthenticator } from 'aws-amplify-react'
import { AmplifyTheme } from 'aws-amplify-react';
import { primary } from './theme'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const authTheme = {
  ...AmplifyTheme,
  sectionHeader: {
    fontSize: 20,
    fontWeight: 500,
    margin: 0,
    borderBottom: `2px solid ${primary}`,
    paddingBottom: 4
  },
  formSection: {
    ...AmplifyTheme.formSection,
    backgroundColor: "white",
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  },
  sectionFooter: {
    ...AmplifyTheme.sectionFooter,
    backgroundColor: "white"
  },
  button: {
    ...AmplifyTheme.button,
    fontWeight: 500,
    position: 'relative',
    margin: '10px 10px 10px',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ededed',
    cursor: 'pointer'
  }
}

export default withAuthenticator(App, false, [], null, authTheme)
