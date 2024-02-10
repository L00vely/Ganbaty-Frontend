// Header.tsx
import { HStack } from '@chakra-ui/react';
import Image from "next/image";
import Link from 'next/link';
import React from 'react';
import { LanguageToggle } from '.';
import ColorModeToggle from './ColorModeToggle';

interface HeaderProps {
  pageProps: {
    slug?: string;
    altSlug?: string;
    locale: string;
    locales: string[];
    altLocale: string;
  }
}

export const Header: React.FC<HeaderProps> = ({ pageProps }) => {

  const { locale } = pageProps;


  return (
    <HStack
      as='header'
      gridArea="header"
      w="100vw"
      h="fit-content"
      bg='brand.primary'
      p="1rem"
      spacing="md"
      justify="space-between"
    >
      <Link href={`/`} locale={ locale }>
          <Image
              src='/logo.png'
              alt='Ganbaty'
              width={100}
              height={100}
          />
      </Link>

      <HStack w="fit-content">
        <LanguageToggle 
          pageProps={ pageProps }
        /> 
        <ColorModeToggle />
      </HStack>
    </HStack>
  );
};


