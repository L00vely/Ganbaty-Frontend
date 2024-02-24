export interface PageContent {
    children?: any;
}

export const defaultPage: Page = {
    title: '',
    slug: '',
    iconUrl: '',
    description: ''
  };

export interface Page {
    title: string;
    slug: string;
    iconUrl: string;
    description: string;
}

  
export interface PageCollection {
    items: Page[];
}

export  interface PageContentCollection {
    items: PageContent[];
}

  