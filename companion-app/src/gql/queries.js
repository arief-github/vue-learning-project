import gql from "graphql-tag";

export const ListingQuery = gql`
    query Listings {
        listings {
            id
            title
            description
            image
            address
            price
            numOfGuests
            numOfBeds
            numOfBaths
            rating
        }
    }
`;