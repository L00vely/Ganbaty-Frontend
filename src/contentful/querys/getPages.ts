import { PageCollection } from "@/models";
import { contentfulClient } from "..";

const getPages= async (locale: string): Promise<PageCollection | undefined> => {

  const query = `query{
    
    pageCollection(locale: "${ locale }", where:{sys:{id_exists:true}}) {
      items {
        title
        slug
        iconUrl
        description
      }
    }

  }`;

  try {
    const data = await contentfulClient.request<{ pageCollection: PageCollection }>(query);
    const { pageCollection } = data;
    return pageCollection
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export {
  getPages
};

