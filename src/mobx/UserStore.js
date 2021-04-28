import { API, graphqlOperation, Auth } from 'aws-amplify'
import { getUserByEmail as GetUserByEmail, createUser, updateUser } from '../graphql'

import { observable, decorate } from 'mobx'

class User {
  username = ''
  email = ''
  id = undefined
  designation = 'Edit'
  group = 'Guest'
  poolUser = undefined
  async init() {
    
    try {
      this.poolUser = await Auth.currentAuthenticatedUser()
      this.username = this.poolUser.username
      this.email = this.poolUser.signInUserSession.idToken.payload.email
    } catch (err) {
      console.log('error getting user data... ', err)
    }
    if (this.username !== '') {
      this.checkIfUserExists(this.poolUser, this.email)
    }
  }

  async checkIfUserExists(poolUser, email) {
    try {
      var user = await API.graphql(graphqlOperation(GetUserByEmail, { email }))
      var getUser = user.data.listUsers.items[0]
      if (!getUser) {
        this.createUser()
        user = await API.graphql(graphqlOperation(GetUserByEmail, { email }))
        getUser = user.data
        this.id = getUser.id
        this.designation = getUser.designation
        this.email = getUser.email
        this.group = getUser.group
        alert("User Created with User Name: '" + this.email + "'. Contact Admin to add your account to respective group. Contact @karthicksabesan@gmail.com")
      } else {
        this.id = getUser.id
        this.designation = getUser.designation
        this.email = getUser.email
        this.group = getUser.group
        if (getUser.group === "Guest") {
          const groups = poolUser.signInUserSession.accessToken.payload["cognito:groups"];
          if (groups.indexOf('Admin') !== -1) {
            await API.graphql(graphqlOperation(updateUser, {
              id:  this.id,
              group: "Admin"
            })).catch(error => {
              console.log(error)
            })
            .then(result => {
              console.log("Update Admin Result:", result)
            })
          }
          else if (groups.indexOf('Executive') !== -1) {
            await API.graphql(graphqlOperation(updateUser, {
              id:  this.id,
              group: "Executive"
            })).catch(error => {
              console.log(error)
            })
            .then(result => {
              console.log("Update Executive Result:", result)
            })
          }
          else if (groups.indexOf('Manager') !== -1) {
            await API.graphql(graphqlOperation(updateUser, {
              id:  this.id,
              group: "Manager"
            })).catch(error => {
              console.log(error)
            })
            .then(result => {
              console.log("Update Manager Result:", result)
            })
          }
          else if (groups.indexOf('Tester') !== -1) {
            await API.graphql(graphqlOperation(updateUser, {
              id:  this.id,
              group: "Tester"
            })).catch(error => {
              console.log(error)
            })
            .then(result => {
              console.log("Update Tester Result:", result)
            })
          }
        }
      }
    } catch (err) {
      console.log('error fetching user: ', err)
    }
  }

  async createUser() {
    try {
      await API.graphql(graphqlOperation(createUser,
        {
          email: this.email,
          username: this.email,
          group: this.group,
          designation: this.designation
        })).then(result => {
          console.log("User creation result:", result)
        })
    } catch (err) {
      console.log('Error creating user! :', err)
    }
  }
}

decorate(User, {
  username: observable,
  email: observable,
  id: observable,
  designation: observable,
  group: observable
});

export default new User()
