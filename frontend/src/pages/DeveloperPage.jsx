import React, { useEffect, useState } from "react";
import {
  Container,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Checkbox,
  Select,
  Text,
  Heading,
  Flex,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import DropdownCheckboxMenu from "../component/DropdownCheckboxMenu";
import { ProfessionalExpModal } from "../component/ProfessionalExpModal";
import { SmallAddIcon } from "@chakra-ui/icons";
import { devAPI } from "../API/api";
import { addUserData } from "../Redux/userSlice";

export const DeveloperPage = () => {
  const { usedDataForm } = useSelector((state) => state);
  const dispatch = useDispatch();
  const {
    isOpen: isProfExpOpen,
    onOpen: onProfExpOpen,
    onClose: onProfExpClose,
  } = useDisclosure();

  //   const {
  //     isOpen: isLoginOpen,
  //     onOpen: onLoginOpen,
  //     onClose: onLoginClose,
  //   } = useDisclosure();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    selectedSkills: [],
    skills: ["JavaScript", "Python", "React", "Node.js", "MongoDB", "CSS"],
    professionalExperiences: [
      {
        company: "",
        tech: "",
        skills: "",
        Start: "",
        End: "",
      },
    ],
    educationalExperiences: [
      {
        degree: "",
        degreeStart: "",
        degreeEnd: "",
        school: "",
        schoolStart: "",
        schoolEnd: "",
      },
    ],
  });
  const toast = useToast();

  const [selectedSkills, setSelectedSkills] = useState([]);
  const handleSkillsChange = (selectedItems) => {
    setSelectedSkills(selectedItems);
    setFormData({
      ...formData,
      selectedSkills: selectedItems, // Update selectedSkills in form data
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // For updating nested properties like educationalExperiences or professionalExperiences
    if (
      name.includes("educationalExperiences.") ||
      name.includes("professionalExperiences.")
    ) {
      const [parentName, childName] = name.split(".");
      setFormData({
        ...formData,
        [parentName]: [
          {
            ...formData[parentName][0],
            [childName]: value,
          },
        ],
      });
    } else {
      // Check if the input is of type date
      if (e.target.type === "date") {
        const formattedDate = new Date(value).toISOString(); // Convert date to ISO format
        setFormData({
          ...formData,
          [name]: formattedDate,
        });
      } else {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    }
  };
  const handleModalSave = (data) => {
    setFormData({
      ...formData,
      professionalExperiences: [
        ...formData.professionalExperiences,
        {
          company: data.company,
          skills: data.selectedSkills,
          Start: data.start,
          End: data.end,
        },
      ],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUserData(formData));

    console.log(formData);
    setFormData({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      selectedSkills: [],
      professionalExperiences: [
        {
          company: "",
          tech: "",
          skills: "",
          Start: "",
          End: "",
        },
      ],
      educationalExperiences: [
        {
          degree: "",
          degreeStart: "",
          degreeEnd: "",
          school: "",
          schoolStart: "",
          schoolEnd: "",
        },
      ],
    });

    // setFormData({
    //   firstName: "",
    //   lastName: "",
    //   phoneNumber: "",
    //   email: "",
    //   selectedSkills: [],
    //   professionalExperiences: [],
    //   educationalExperiences: [],
    // });
  };
  useEffect(() => {
    if (usedDataForm.msg == "added successfully") {
      toast({
        title: "Saved Successfully.",
        description: "We've added your data for you.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  }, [usedDataForm]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            gap: "2rem",
          }}
        >
          <FormControl isRequired>
            <FormLabel mt="1" mb="0" fontSize="sm">
              First Name
            </FormLabel>
            <Input
              size="sm"
              name="firstName"
              value={formData.firstName}
              placeholder="First Name"
              onChange={handleInputChange}
            />
            <FormLabel mt="1" mb="0" fontSize="sm">
              Last Name
            </FormLabel>
            <Input
              size="sm"
              name="lastName"
              value={formData.lastName}
              placeholder="Last Name"
              onChange={handleInputChange}
            />
            <FormLabel mt="1" mb="0" fontSize="sm">
              Phone No.
            </FormLabel>
            <Input
              size="sm"
              name="phoneNumber"
              type="number"
              value={formData.phoneNumber}
              placeholder="Phone No."
              onChange={handleInputChange}
            />
            <FormLabel mt="1" mb="0" fontSize="sm">
              Email
            </FormLabel>
            <Input
              size="sm"
              name="email"
              placeholder="Email"
              value={formData.email}
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
          </FormControl>

          <FormControl isRequired>
            <FormLabel mt="1" mb="0" fontSize="sm">
              Educational Experience
            </FormLabel>{" "}
            <FormLabel mt="1" mb="0" fontSize="sm">
              Degree Name
            </FormLabel>
            <Input
              size="sm"
              name="educationalExperiences.degree"
              value={formData.educationalExperiences[0].degree}
              placeholder="Degree Name"
              onChange={handleInputChange}
            />
            <div style={{ display: "flex", gap: "1rem" }}>
              <div>
                <FormLabel mt="1" mb="0" fontSize="sm" m="0.5" fontsize="sm">
                  Start
                </FormLabel>
                <Input
                  size="sm"
                  name="educationalExperiences.degreeStart"
                  value={formData.educationalExperiences[0].degreeStart}
                  type="date"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <FormLabel mt="1" mb="0" fontSize="sm" m="0.5" fontsize="sm">
                  End
                </FormLabel>
                <Input
                  size="sm"
                  name="educationalExperiences.degreeEnd"
                  value={formData.educationalExperiences[0].degreeEnd}
                  type="date"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <FormLabel mt="1" mb="0" fontSize="sm">
              School Name
            </FormLabel>
            <Input
              size="sm"
              name="educationalExperiences.school"
              value={formData.educationalExperiences[0].school}
              placeholder="School Name"
              onChange={handleInputChange}
            />
            <div style={{ display: "flex", gap: "1rem" }}>
              <div>
                <FormLabel mt="1" mb="0" fontSize="sm" m="0.5" fontsize="sm">
                  Start
                </FormLabel>
                <Input
                  size="sm"
                  name="educationalExperiences.schoolStart"
                  value={formData.educationalExperiences[0].schoolStart}
                  type="date"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <FormLabel mt="1" mb="0" fontSize="sm" m="0.5" fontsize="sm">
                  End
                </FormLabel>
                <Input
                  size="sm"
                  name="educationalExperiences.schoolEnd"
                  value={formData.educationalExperiences[0].schoolEnd}
                  type="date"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <Flex gap="1rem">
              <Button size="sm" mt="5" onClick={onProfExpOpen}>
                Add Professional Experience
              </Button>
              <Button
                size="sm"
                variant="outline"
                mt="5"
                onClick={onProfExpOpen}
                rightIcon={<SmallAddIcon />}
              >
                Add More
              </Button>
            </Flex>
          </FormControl>
        </div>
        <Button
          mt="10"
          type="submit"
          onClick={handleSubmit}
          colorScheme="blue"
          mr={3}
        >
          Sign Up
        </Button>
      </form>
      <ProfessionalExpModal
        isOpen={isProfExpOpen}
        onClose={onProfExpClose}
        onSave={handleModalSave}
      />
    </>
  );
};
