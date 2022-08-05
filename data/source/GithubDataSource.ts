import { gql } from "@apollo/client";
import client from "@/data/apollo";

export const getPinnedRepositories = async () => {
  const GET_PINNED_REPOSITORIES_QUERY = gql`
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
  `;

  const { data } = await client.query({ query: GET_PINNED_REPOSITORIES_QUERY });
  
  return data;
};

export const getShortenedURLsGist = async () => {  //Dog($breed: String!)
  const GET_SHORTENED_URLS_GIST_QUERY = gql`
    query ShortenedURLsGist($gistName: String!) {
      user(login: "bfpimentel") {
        gist(name: $gistName) {
          description
          files(limit: 1) {
            text
          }
        }
      }
    }
  `;

  const { data } = await client.query({
    query: GET_SHORTENED_URLS_GIST_QUERY,
    variables: { "gistName": process.env.SHORTENED_URLS_GIST_NAME },
  });

  return data;
}
