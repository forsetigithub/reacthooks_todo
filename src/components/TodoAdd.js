import { Textarea, Button } from "@chakra-ui/react";

export const TodoAdd = ({ 
  placeholder,
  leftIcon,
  buttonText,
  inputEL, handleAddTodoListItem}) => {
  return(
    <>
      <Textarea 
        placeholder={placeholder}
        bgColor="white"
        mt="8"
        borderColor="gray.400"
        ref={inputEL} />

      <Button onClick={handleAddTodoListItem}
        colorScheme="blue"
        leftIcon={leftIcon}
        mt="8"
      >{buttonText}</Button>
    </>
  );
};