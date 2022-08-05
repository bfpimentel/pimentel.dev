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

export const getShortenedURLsGist = async () => { 
  const { data } = await client.query({
    query: gql`
      query ShortenedURLsGist {
        user(login: "bfpimentel") {
          gist(name: ${process.env.SHORTENED_URLS_GIST_NAME}) {
            description
            files(limit: 1) {
              text
            }
          }
        }
      }
    `,
  });

  return data;
}
