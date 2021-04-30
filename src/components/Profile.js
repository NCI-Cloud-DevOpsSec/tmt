import React from 'react'

import { css } from 'glamor'
import { Auth } from 'aws-amplify'
import { observer } from 'mobx-react'

import UserStore from '../mobx/UserStore'
import { primary } from '../theme'

import { API, graphqlOperation } from 'aws-amplify'
import { updateUser } from '../graphql'

const ProfileWithData = observer(class Profile extends React.Component {
  signOut = async () => {
    try {
      await Auth.signOut()
    } catch (err) {
      console.log('Error signing out')
    }
  }

  constructor() {
    super();
    this.id = undefined
    this.designation = undefined
    this.onDesignationEdit = this.onDesignationEdit.bind(this);
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  onDesignationEdit = event => {
    this.designation = event.target.value
  }

  onUpdateUser = function () {
    try {
      API.graphql(graphqlOperation(updateUser, {
        id: this.id,
        designation: this.designation
      })).then(result => {
      }).catch(err => {
        console.log("Error Updating user from profile", err)
      })
    }
    catch (err) {
      console.log('Error Udating user data! :', err)
    }
  }

  render() {
    const { email, id, designation, group } = UserStore
    this.id = id
    this.designation = designation
    return (
      <div {...css(styles.container)}>
        <p {...css(styles.title)} data-testid="profileTitle" >Profile</p>
        <p>Email: <b data-testid="userEmailValue">{email}</b></p>
        <p>Designation:
          <form {...css(styles.editDesignation)}>
            <input type="text" data-testid="profile_designation" value={this.designation} onChange={this.onDesignationEdit} />
            <button {...css(styles.button)} data-testid="updateDesignation" onClick={this.onUpdateUser}> Update </button>
          </form>
        </p>
        <p>Access Group: <b>{group}</b></p>

        <div {...css(styles.signOutButton)}>
          <p {...css(styles.buttonText)} data-testid="signOut" onClick={this.signOut}>Sign Out</p>
        </div>
      </div>
    )
  }
})

const styles = {
  button: {
    margin: '10px 10px 0px',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ededed',
    cursor: 'pointer'
  },
  editDesignation: {
    position: 'relative'
  },
  signOutButton: {
    fontWeight: 500,
    position: 'relative',
    margin: '10px 0px 0px',
    height: 30,
    justifyContent: 'center',
    'textAlign': 'center',
    alignItems: 'center',
    backgroundColor: '#ededed',
    cursor: 'pointer'
  },
  buttonText: {
    fontWeight: 500
  },
  container: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    border: `2px solid ${primary}`,
    padding: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
    margin: 0,
    borderBottom: `2px solid ${primary}`,
    paddingBottom: 4
  }
}

export default ProfileWithData
