
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Button, Icon, useColorMode, useColorModeValue } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation'


interface ColorModeToggleProps {
   
  }

const ColorModeToggle: React.FC<ColorModeToggleProps> = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    const { t } = useTranslation('common')
    
    const colorModeTitle = useColorModeValue(t('darkMode'), t('lightMode'))

    const bg =  useColorModeValue("brand.primary", "brand.secondary")

    const hover = useColorModeValue(
        { 
            backgroundColor: { bg },
            color: 'colors.white'
        }, 
        { 
            backgroundColor: { bg },
            color: 'colors.white'
        }
    )

    const buttonIcon = useColorModeValue(<MoonIcon />, <SunIcon />);

    return (
        <Button 
            transition="background-color 0.3s ease"
            leftIcon={ buttonIcon }
            color='brand.white'
            backgroundColor= { bg }
            variant='ghost'
            _hover={ hover }
            w="10rem"
            onClick={ toggleColorMode }
        >
            { colorModeTitle }
        </Button>
    )
}

export default ColorModeToggle