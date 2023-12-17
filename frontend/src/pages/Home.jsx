import { Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../Redux/userSlice";

export const Home = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleEmployer = () => {
    dispatch(getUserData());
    navigate("/client");
  };
  const handleCandidate = () => {
    navigate("/developer");
  };
  return (
    <div>
      <h1>INDIA’S #1 JOB PLATFORM</h1>
      <h1>Get Started </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme="blue"
          variant="outline"
          onClick={handleEmployer}
        >
          Employer
        </Button>
        <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme="blue"
          variant="outline"
          onClick={handleCandidate}
        >
          Candidate
        </Button>
      </div>
    </div>
  );
};
