import { gql } from "apollo-boost";

export const NEW_TODO = gql`
  mutation AddTodo($text: String!) {
    addTodo(type: $text) {
      id
      type
    }
  }
`;
