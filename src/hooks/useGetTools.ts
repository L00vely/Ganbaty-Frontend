import { getTools } from '@/contentful';
import { useState, useEffect, useMemo } from 'react';

import { Tool } from "@/models"

  
interface ToolsHookResult {
    memorizedTools: Tool[]; 
    isLoading: Boolean
}
  
export const useGetTools = (locale: string): ToolsHookResult => {
    const [tools, setTools] = useState<Tool[]>([]);
    const [isLoading, setIsLoading] = useState<Boolean>(true);

    useEffect(() => {
      const fetchTools = async () => {
        try {
          const fetchedTools = await getTools(locale);
          
          if (fetchedTools) {
            setTools(fetchedTools.items);
            setIsLoading(false)
          }
        } catch (error) {
          console.error(error);
        }
      };

      fetchTools();
    }, [locale]);

  
    const memorizedTools = useMemo(() => tools, [tools]);
  
    return {
      memorizedTools,
      isLoading
    };
  };
