import React, { useEffect, useState } from "react";
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
import { signUpUser } from "../Redux/userSlice";
import { successComp, failComp } from "./alertMsg";

export const SignUp = ({ isOpen, onClose }) => {
  const [show, setShow] = useState(false);
  const [inputValues, setInputValues] = useState({
    name: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      inputValues.name.trim() === "" ||
      inputValues.email.trim() === "" ||
      inputValues.password.trim() === ""
    ) {
      setError(true);
    } else {
      dispatch(signUpUser(inputValues));
      setError(false);
      onClose();
    }
  };
  useEffect(() => {
    if (user.msg === "user already exist") {
      failComp("User already exist");
    }
    if (user.msg === "user registered successfully") {
      successComp("Registered successfully");
    }
  }, [user]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <Center>
          <ModalHeader>Register</ModalHeader>
        </Center>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              name="name"
              value={inputValues.name}
              placeholder="Name"
              onChange={handleInputChange}
            />
          </FormControl>
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
