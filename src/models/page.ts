export interface PageContent {
    content: any
}

export const defaultPage: Page = {
    title: '',
    slug: ''
  };

export interface Page {
    title: string;
    slug: string
}

  
export interface PageCollection {
    items: Page[];
}

export  interface PageContentCollection {
    items: PageContent[];
}

  