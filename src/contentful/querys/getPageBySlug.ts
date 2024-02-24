import { Page, PageCollection } from "@/models";
import { contentfulClient } from "..";

const getPageBySlug= async (slug: string, locale: string): Promise<Page> => {

  const query = `query{
    
    pageCollection(limit: 1, locale: "${locale}", where:{slug:"${slug}"}) {
      items {
        title
        slug
        description
        iconUrl
      }
    }

  }`;

  try {
    const data = await contentfulClient.request<{ pageCollection: PageCollection }>(query);
    const { pageCollection } = data;
    return pageCollection.items[0];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export {
  getPageBySlug
};

