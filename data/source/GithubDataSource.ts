import { gql } from "@apollo/client";
import client from "@/data/apollo";

export const getPinnedRepositories = async () => {
  const { data } = await client.query({
    query: gql`
      query PinnedRepositories {
        user(login: "bfpimentel") {
          pinnedItems(first: 6, types: REPOSITORY) {
            nodes {
              ... on Repository {
                name
                description
              }
            }
          }
        }
      }
    `,
  });

  return data;
};
