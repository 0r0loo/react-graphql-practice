import { gql } from 'apollo-server-express';

const messagesSchema = gql`
  type Message {
    id: ID!
    text: String!
    userId: ID!
    timestamp: Float # 13자리 숫자
  }
  extend type Query {
    messages: [Message!]!
    message(id: ID!): Message!
  }

  extend type Mutation {
    createMessage(text: String!, userId: ID!): Message!
    updateMessage(id: ID!, text: String!, userId: ID!): Message!
    deleteMessage(id: ID!, userId: ID!): ID!
  }
`;
export default messagesSchema;
