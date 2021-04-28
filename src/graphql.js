import graphql from 'graphql-tag'
import gql from 'graphql-tag';

// mutations
const createUser = `
  mutation($email: String!, $username: String!, $group: String!, $designation: String!) {
    createUser(input: {
        username: $username
        email: $email
        group: $group
        designation: $designation
    }) {
      id
      username
      email
      group
      designation
      createdAt
    }
  }
`

const updateUser = `
mutation ($id: ID!, $designation: String, $group: String) {
  updateUser(input: {
    id: $id, 
    designation: $designation,
    group: $group
  }) 
  {
    id
    group
    email
    designation
    createdAt
  }
}
`

// const createRecipie = `
//   mutation($name: String!, $cuisine: String!, $ingredients: [String!]!, $possibleAllergens: [String!]!, $description: String!, $mediaUrl: String!){
//     createRecipie(input:{
//       name: $name
//       cuisine: $cuisine
//       ingredients: $ingredients
//       possibleAllergens: $possibleAllergens
//       description: $description
//       mediaUrl: $mediaUrl
//     }){
//       id
//     }
//   }
// `

// const createMessage = gql`mutation CreateMessage(
//     $createdAt: String, $id: ID, $authorId: String, $content: String!, $messageConversationId: ID!
//   ) {
//   createMessage(input: {
//     createdAt: $createdAt, id: $id, content: $content, messageConversationId: $messageConversationId, authorId: $authorId
//   }) {
//     id
//     content
//     authorId
//     messageConversationId
//     createdAt
//   }
// }
// `;


// const createConvo = `mutation CreateConvo($name: String!, $members: [String!]!) {
//   createConvo(input: {
//     name: $name, members: $members
//   }) {
//     id
//     name
//     members
//   }
// }
// `;

// const createConvoLink = `mutation CreateConvoLink(
//     $convoLinkConversationId: ID!, $convoLinkUserId: ID
//   ) {
//   createConvoLink(input: {
//     convoLinkConversationId: $convoLinkConversationId, convoLinkUserId: $convoLinkUserId
//   }) {
//     id
//     convoLinkUserId
//     convoLinkConversationId
//     conversation {
//       id
//       name
//     }
//   }
// }
// `;

const getUser = graphql`
  query getUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      username
      group
      designation
    }
  }
`

const getUserByEmail = graphql`
  query listUsers ($email: String!){
    listUsers (filter: {email: {eq: $email}}){
      items {
        id
        email
        username
        group
        designation
        createdAt
      }
    }
  }
`

// const getUserAndConversations = gql`
//   query getUserAndConversations($id:ID!) {
//     getUser(id:$id) {
//       id
//       username
//       conversations(limit: 100) {
//         items {
//           id
//           conversation {
//             id
//             name
//           }
//         }
//       }
//     }
//   }
// `

// const getConvo = gql`
//   query getConvo($id: ID!) {
//     getConvo(id:$id) {
//       id
//       name
//       members
//       messages(limit: 100) {
//         items {
//           id
//           content
//           authorId
//           messageConversationId
//           createdAt
//         }
//       }
//       createdAt
//       updatedAt
//     }
//   }
// `

const listUsers = graphql`
  query listUsers {
    listUsers {
      items {
        id
        email
        username
        group
        designation
        createdAt
      }
    }
  }
`

// const listRecipies = graphql`
//   query listRecipies{
//     listRecipies {
//     items {
//       cuisine
//       description
//       dislikes
//       likes
//       ingredients
//       mediaUrl
//       name
//       possibleAllergens
//       user
//     }
//   }
//   }
// `

// const filterRecipieByName = graphql`
// query listRecipies ($searchKeyword: String!){
//   listRecipies(
//     limit: 15
//     filter: {
//       name: {
//       contains: $searchKeyword
//       }
//     }
//   ) {
//     items {
//       cuisine
//       description
//       dislikes
//       likes
//       ingredients
//       mediaUrl
//       name
//       possibleAllergens
//       user
//     }
//   }
// }
// `

// const onCreateMessage = gql`
//   subscription onCreateMessage($messageConversationId: ID!) {
//     onCreateMessage(messageConversationId: $messageConversationId) {
//       id
//       content
//       authorId
//       messageConversationId
//       createdAt
//     }
//   }
// `

const onCreateUser = gql`subscription OnCreateUser {
  onCreateUser {
    id
    email
    group
    designation
    username
    createdAt
  }
}
`;

export {
  createUser,
  updateUser,
  // createRecipie,
  //   createMessage,
  //   createConvoLink,
  //   getConvo,
  getUser,
  getUserByEmail,
  //   getUserAndConversations,
  listUsers,
  // listRecipies,
  // filterRecipieByName,
  //   onCreateMessage,
  onCreateUser
}
