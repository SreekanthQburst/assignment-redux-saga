import { gql } from "apollo-boost";

export const GET_USER_LIST = gql`
  query GetRates {
    rates(currency: "USD") {
      currency
    }
  }
`;
