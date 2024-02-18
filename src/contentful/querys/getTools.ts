import { contentfulClient } from "..";
import { ToolCollection } from "@/models"

const getTools = async (locale: String): Promise<ToolCollection | undefined> => {
  const query = `
      query {
        toolCollection(order: [name_DESC], locale: "${locale}") {
          items {
            name
            iconUrl
          }
        }
      }
    `;

  try {
    const data = await contentfulClient.request<{ toolCollection: ToolCollection }>(query);
    const { toolCollection } = data;
    return toolCollection;
  } catch (error) {
    console.error(error);
  }
};

export { getTools };
