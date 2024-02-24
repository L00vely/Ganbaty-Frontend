import React from 'react'
import { Card } from '@chakra-ui/react';

interface ModifiableCardProps {
    children: React.ReactNode;
    w: string;
    h: string;
    backGroundColor?: string;
    justifyContent?: string;
    alignItems?: string;
    borderRadius?: string;
    padding?: string;
}

export const ModifiableCard: React.FC<ModifiableCardProps> = (ModifiableCardProps) => {
  const { children, w, h, borderRadius, padding, backGroundColor, justifyContent, alignItems } = ModifiableCardProps;
  
    return (
    <Card
      w={ w }
      h={ h }
      justify={ justifyContent }
      align={ alignItems }
      gap="1rem"
      bg={ backGroundColor }
      borderRadius={ borderRadius } 
      boxShadow="none"
      p={ padding }
    >
        { children }
    </Card>
  )
}
