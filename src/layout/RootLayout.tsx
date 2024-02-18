// RootLayout.tsx
import { Header, Footer } from '@/components';
import {  Grid, GridItem, useBreakpointValue, useColorModeValue } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
// 
interface RootLayoutProps {
  children: ReactNode;
  pageProps: {
    locale: string;
    locales: string[];
    altLocale: string;
    slug: string;
    altSlug: string;
  };
}

export const RootLayout: React.FC<RootLayoutProps> = ({ children, pageProps }) => {
  const bg = useColorModeValue("brand.white", "brand.primary")


  const gridTemplateAreas = useBreakpointValue({
    base: `"header"
    "main"
    "footer"`
  });

  const gridTemplateRows = useBreakpointValue({
    base: ".25fr 4fr .25fr",
  })

  const gridTemplateColumns = useBreakpointValue({
    base: "1fr",
  })

  return (
    <Grid
      templateRows= {gridTemplateRows}
      templateColumns={ gridTemplateColumns }
      templateAreas={ gridTemplateAreas } 
      w='100vw'
      h="100vh"
      overflowX="hidden"
    >
      <Header pageProps={ pageProps }/>

      <GridItem 
        as='main' 
        gridArea="main"
        bg={ bg }
        
      > 
        { children }
      </GridItem>

      <Footer />
    </Grid>
  );
};


