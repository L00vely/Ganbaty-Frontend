import React, { useState } from 'react';

import { VStack, chakra } from '@chakra-ui/react';

interface FormProps {
  action: string;
}

interface FormData {
  status: number;
  message: string;
  preview?: string;
}

export const Form = ({ action }: FormProps): JSX.Element => {

  const [data, setData] = useState<FormData | null>(null);


  // const previewTable = React.createElement('div', { dangerouslySetInnerHTML: { __html: data?.preview } });


  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;

      if (fileInput.files && fileInput.files[0]) {
        formData.append('csvfile', fileInput.files[0]);

        const response = await fetch(action, {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const responseData = await response.json();
          console.log(responseData)
    
          setData(responseData);
        } else {
          console.error('Error al subir el archivo:', response.statusText);
          setData(null);
        }
      } else {
        setData(null);
      }
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  return (
    <VStack 
      w="100%"
    >
      
      <form onSubmit={submit}>
        <input type="file" name="csvfile" accept=".csv" />
        <input type="submit" value="Upload" />
      </form>

      {
        data?.preview ? (
          <chakra.div
            dangerouslySetInnerHTML={{ __html: data?.preview || ''}}
            p="1rem" 
            borderWidth="1px" 
            borderColor="brand.white"
            borderRadius="md" 
          />
        ) : null
      }
      
      
    </VStack>
  );
};
