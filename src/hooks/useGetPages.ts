import { getPages } from '@/contentful';
import { useState, useEffect, useMemo } from 'react';

import { Page } from "@/models"

  
interface PagesHookResult {
    memorizedPages: Page[]; 
    isLoading: Boolean
}
  
export const useGetPages = (locale: string): PagesHookResult => {
    const [pages, setPages] = useState<Page[]>([]);
    const [isLoading, setIsLoading] = useState<Boolean>(true);

    useEffect(() => {
      const fetchPages = async () => {
        try {
          const fetchedPages = await getPages(locale);
          if (fetchedPages) {
            setPages(fetchedPages.items);
            setIsLoading(false)
          }
        } catch (error) {
          console.error(error);
        }
      };

      fetchPages();
    }, [locale]);

  
    const memorizedPages = useMemo(() => pages, [pages]);
  
    return {
      memorizedPages,
      isLoading
    };
  };
