import { chakra, HTMLChakraProps } from "@chakra-ui/react";

interface TableProps extends HTMLChakraProps<"div"> {
  preview: string 
}

const Table: React.FC<TableProps> = ({ data, ...rest }) => {
  return (
    <chakra.div
      dangerouslySetInnerHTML={{ __html: preview }}
      p="4" // Añadimos un padding de 4 para espaciar el contenido
      borderWidth="1px" // Añadimos un borde de 1px
      borderColor="gray.200" // Color del borde
      borderRadius="md" // Añadimos un borde redondeado
      {...rest}
    />
  );
};

export default Table;
