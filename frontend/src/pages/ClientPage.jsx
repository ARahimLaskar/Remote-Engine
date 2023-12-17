import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../Redux/userSlice";
import {
  Card,
  CardHeader,
  CardBody,
  StackDivider,
  CardFooter,
  Heading,
  Box,
  Text,
  Stack,
} from "@chakra-ui/react";
export const ClientPage = () => {
  const dispatch = useDispatch();
  const { candidateData } = useSelector((state) => state);
  console.log(candidateData);
  useEffect(() => {
    dispatch(getUserData);
    console.log(candidateData);
  }, [candidateData]);
  return (
    <div
      style={{
        display: "flex",
        marginTop: "2rem",
        flexWrap: "wrap",
        gap: "3rem",
      }}
    >
      {candidateData &&
        candidateData?.map((e) => {
          return (
            <Card>
              <CardHeader>
                <Heading size="md">Client Report</Heading>
              </CardHeader>

              <CardBody textAlign="left">
                <Stack divider={<StackDivider />} spacing="4">
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      {`${e.firstName} ${e.lastName}`}
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      {`${e.email}, ${e.phoneNumber}`}
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Professional Experiences
                    </Heading>
                    {e.professionalExperiences?.map((ei) => {
                      return (
                        <>
                          <Text>Company : {ei.company}</Text>
                          <Text>Start : {ei.start}</Text>
                          <Text>End : {ei.end}</Text>
                        </>
                      );
                    })}
                  </Box>
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Educational Qualification
                    </Heading>
                    {e.educationalExperiences?.map((ei) => {
                      return (
                        <>
                          <Text>Degree : {ei.degree}</Text>
                          <Text>Start : {ei.degreeStart}</Text>
                          <Text>End : {ei.degreeEnd}</Text>
                          <Text>school : {ei.school}</Text>
                          <Text>Start : {ei.schoolStart}</Text>
                          <Text>End : {ei.schoolEnd}</Text>
                        </>
                      );
                    })}
                  </Box>
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Skills
                    </Heading>
                    {e.selectedSkills?.map((ei) => {
                      return (
                        <>
                          <Text> {ei}</Text>
                        </>
                      );
                    })}
                  </Box>
                </Stack>
              </CardBody>
            </Card>
          );
        })}
    </div>
  );
};
