import gql from "graphql-tag";

export const DeleteListingMutation = gql`
    mutation DeleteListing($id: ID!) {
        deleteListing(id: $id) {
            id
        }
    }
`;