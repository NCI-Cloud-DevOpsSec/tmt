import React from 'react'

import { css } from 'glamor'
import { Link, withRouter } from 'react-router-dom'

import { primary } from '../theme'
import AppInfo from './AppInfo'

class Header extends React.Component {
  render() {
    const app = {
      name: "TmT",
      version: "1.0.0"
    }
    return (
      <div {...css(styles.header)}>
        <Link
          to='/project'
          {...css(styles.button)}
        >
          <p {...css(styles.buttonText)}>Projects</p>
        </Link>
        <Link
          to='/testCases'
          {...css(styles.button)}
        >
          <p {...css(styles.buttonText)}>Test Cases</p>
        </Link>
        <Link
          to='/profile'
          {...css(styles.button)}
        >
          <p {...css(styles.buttonText)}>Profile</p>
        </Link>
        <AppInfo id={app}/>
      </div>
    )
  }
}

const styles = {
  header: {
    height: 50,
    backgroundColor: primary,
    position: 'absolute',
    alignItems: 'center',
    top: 0,
    left: 0,
    width: '100%',
    display: 'flex'
  },
  logo: {
    height: 34,
    paddingLeft: 10
  },
  button: {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'black'
  },
  buttonText: {
    fontWeight: 500,
    color: 'white'
  }
}

export default withRouter(Header)