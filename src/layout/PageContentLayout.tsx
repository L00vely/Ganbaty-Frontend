import { Flex, Divider, useBreakpointValue, VStack, useColorModeValue } from '@chakra-ui/react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { renderOptions } from '@/contentful'
import { PageContent } from '@/models';

export const PageContentLayout = (props: PageContent) => {
    const { content } = props;

    const bg = useColorModeValue("brand.white", "brand.primary")

    const color = useColorModeValue("brand.primary", "brand.white")

    return (
        <VStack
            w="100%"
        >
            { documentToReactComponents(content.json, renderOptions(content.links, bg, color ) )}
        </VStack>
    )
}
