import { Button, ButtonProps } from "@chakra-ui/react";
import React from "react";

interface MyButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export default function RPButton({children, ...props}: MyButtonProps) {
  return (
    <Button {...props} 
      border="none"
      variant="solid"
      colorScheme='teal'
      mt={4}
    >{children}</Button>
  )
} 