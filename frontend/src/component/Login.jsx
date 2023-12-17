import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Center,
  Text,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Redux/userSlice";
import { successComp, failComp } from "./alertMsg";

export const Login = ({ isOpen, onClose }) => {
  const [show, setShow] = React.useState(false);
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);

  const handleShowPassword = () => setShow(!show);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (inputValues.email.trim() === "" || inputValues.password.trim() === "") {
      setError(true);
    } else {
      dispatch(loginUser(inputValues));
      setError(false);
      onClose();
    }
  };
  useEffect(() => {
    if (user.msg === "no user found") {
      failComp("No user found, Please Sign Up!");
    }
    if (user.msg === "invalid credentials") {
      failComp("Invalid credentials");
    }
    if (user.msg === "login successful") {
      successComp("login successful");
    }
  }, [user]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <Center>
          <ModalHeader>Login</ModalHeader>
        </Center>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl isRequired mt={4}>
            <FormLabel>Email</FormLabel>
            <Input
              name="email"
              placeholder="Email"
              value={inputValues.email}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl isRequired mt={4}>
            <FormLabel>Password</FormLabel>
            <InputGroup size="md">
              <Input
                name="password"
                value={inputValues.password}
                onChange={handleInputChange}
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
              />
              <InputRightElement onClick={handleShowPassword} width="4.5rem">
                {show ? (
                  <span class="material-symbols-outlined">visibility</span>
                ) : (
                  <span class="material-symbols-outlined">visibility_off</span>
                )}
              </InputRightElement>
            </InputGroup>
          </FormControl>
          {error ? (
            <Text mt="2" color="red.500" fontSize="xs">
              All Fields Required
            </Text>
          ) : (
            ""
          )}
        </ModalBody>

        <ModalFooter>
          <Button onClick={handleSubmit} colorScheme="blue" mr={3}>
            Sign Up
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
