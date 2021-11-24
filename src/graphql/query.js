import { gql } from "apollo-boost";

export const GET_TODO_LIST = gql`
  query Todos {
    todos {
      id
      type
    }
  }
`;
export const GET_TODO = gql`
  query Todo($id: String!) {
    todo(id: $id) {
      id
      type
    }
  }
`;
