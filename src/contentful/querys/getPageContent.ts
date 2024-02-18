import { PageCollection, PageContent, PageContentCollection } from "@/models";
import { contentfulClient } from "..";

const getPageContent= async (slug: string, locale: string): Promise<PageContent> => {
  const query = `query{
    pageCollection(limit: 1, locale: "${locale}", where: { slug:"${slug}" } ) {
      items {
        content{
          json
          links {
            entries {
              inline {
                sys {
                  id
                }
                __typename
                ... on Tool {
                  name
                  slug
                  iconUrl
                }
              }
              block {
                sys {
                  id
                }
                __typename
                ... on Tool {
                  name
                  slug
                  iconUrl
                }
              }
            }
            assets {
              block {
                sys {
                  id
                }
                url
                title
                description
              }
            }
          }
        }
      }
    }
  }`;

  try {
    const data = await contentfulClient.request<{ pageCollection: PageContentCollection }>(query);
    const { pageCollection } = data;
    return pageCollection.items[0].content;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export {
  getPageContent
};
