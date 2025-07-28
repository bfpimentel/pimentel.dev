import { gql } from "@apollo/client"

import client from "@/data/apollo"

export const getGitubProfileRawInfo = async () => {
  const GET_GITHUB_PROFILE_QUERY = gql`
    query PinnedRepositories($username: String!) {
      user(login: $username) {
        name
        avatarUrl
        bio
        company
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
  `

  const { data } = await client.query({
    query: GET_GITHUB_PROFILE_QUERY,
    variables: {
      username: "bfpimentel",
    },
  })

  return data
}

export const getShortenedURLsGist = async () => {
  const GET_SHORTENED_URLS_GIST_QUERY = gql`
    query ShortenedURLsGist($username: String!, $gistName: String!) {
      user(login: $username) {
        gist(name: $gistName) {
          description
          files(limit: 1) {
            text
          }
        }
      }
    }
  `

  const { data } = await client.query({
    query: GET_SHORTENED_URLS_GIST_QUERY,
    variables: {
      username: "bfpimentel",
      gistName: process.env.GIST_ID,
    },
  })

  return data
}
