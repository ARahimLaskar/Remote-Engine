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
  Flex,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import DropdownCheckboxMenu from "./DropdownCheckboxMenu";

export const ProfessionalExpModal = ({ isOpen, onClose, onSave }) => {
  const [inputValues, setInputValues] = useState({
    company: "",
    selectedSkills: [],
    start: "",
    end: "",
  });
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);

  const [selectedSkills, setSelectedSkills] = useState([]);
  const handleSkillsChange = (selectedItems) => {
    setSelectedSkills(selectedItems);
    setInputValues({
      ...inputValues,
      selectedSkills: selectedItems, // Update selectedSkills in form data
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSave(inputValues);
    onClose();
    setInputValues({
      company: "",
      selectedSkills: [],
      start: "",
      end: "",
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <Center>
          <ModalHeader>Professional Experience</ModalHeader>
        </Center>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl isRequired mt={4}>
            <FormLabel mt="1" mb="0" fontSize="sm">
              Company Name
            </FormLabel>
            <Input
              size="sm"
              name="company"
              value={inputValues.company}
              placeholder="Company Name"
              onChange={handleInputChange}
            />

            <FormLabel mt="1" mb="0" fontSize="sm">
              Skills
            </FormLabel>
            <Flex>
              <DropdownCheckboxMenu
                selectedSkills={selectedSkills}
                onChange={handleSkillsChange}
              />
            </Flex>

            <FormLabel mt="1" mb="0" fontSize="sm">
              Period
            </FormLabel>
            <div style={{ display: "flex", gap: "1rem" }}>
              <div>
                <FormLabel mt="1" mb="0" fontSize="sm" m="0.5" fontsize="sm">
                  Start
                </FormLabel>
                <Input
                  size="sm"
                  name="start"
                  value={inputValues.start}
                  type="date"
                  placeholder="Last Name"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <FormLabel mt="1" mb="0" fontSize="sm" m="0.5" fontsize="sm">
                  End
                </FormLabel>
                <Input
                  size="sm"
                  name="end"
                  value={inputValues.end}
                  type="date"
                  placeholder="Last Name"
                  onChange={handleInputChange}
                />
              </div>
            </div>
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
          <Button onClick={onClose} variant="outline" mr={3}>
            Close
          </Button>
          <Button onClick={handleSubmit} colorScheme="blue" mr={3}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
