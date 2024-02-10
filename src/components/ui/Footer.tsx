// Header.tsx
import { GridItem, Text, Link } from '@chakra-ui/react';
import React from 'react';
import useTranslation from 'next-translate/useTranslation'

interface FooterProps {

}

export const Footer: React.FC<FooterProps> = () => {

  // Traducir el label del botón de idiomas
  const { t } = useTranslation('common')
  const label = t('footer');
  const iconsMention = `${t('icons')}`

  return (
    <GridItem
      as='footer'
      area="footer"
      w="100vw"
      h="100%"
      bg="brand.primary"
      color= "brand.white"
      p="2rem"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="flex-start"
    >
      
      <Text>{ label }</Text>
      <Text as="span">  
        { iconsMention }

        <Link as="a" href='https://icons8.com' textDecoration="underline" isExternal>
          Icons8
        </Link> 
      </Text>
    </GridItem>
  );
};


