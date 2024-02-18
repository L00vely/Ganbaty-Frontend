import { getPageBySlug } from '@/contentful';
import { useState, useEffect, useMemo } from 'react';

import { Page, defaultPage } from "@/models"

  
interface PageHookResult {
    memorizedPage: Page; 
    isLoading: Boolean
}
  
export const useGetPageBySlug = (slug: string, locale: string): PageHookResult => {
    const [page, setPage] = useState<Page>(defaultPage);
    
    const [isLoading, setIsLoading] = useState<Boolean>(true);

    useEffect(() => {
      const fetchPage = async () => {
        try {
          const fetchedPage = await getPageBySlug(slug, locale);
          if (fetchedPage) {
            setPage(fetchedPage);
            setIsLoading(false)
          }
        } catch (error) {
          console.error(error);
        }
      };

      fetchPage();
    }, [locale]);

  
    const memorizedPage = useMemo(() => page, [page]);
  
    return {
      isLoading,
      memorizedPage
    };
  };
