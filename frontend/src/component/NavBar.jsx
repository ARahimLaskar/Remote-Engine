import React from "react";
import logo from "../assets/logo.png";
import { Button, useDisclosure } from "@chakra-ui/react";
import { SignUp } from "./SignUp";
import { Login } from "./Login";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const {
    isOpen: isSignupOpen,
    onOpen: onSignupOpen,
    onClose: onSignupClose,
  } = useDisclosure();

  const {
    isOpen: isLoginOpen,
    onOpen: onLoginOpen,
    onClose: onLoginClose,
  } = useDisclosure();
  const { user } = useSelector((state) => state);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem",
          backgroundColor: "azure",
        }}
      >
        <Link to="/">
          {" "}
          <img style={{ maxWidth: "50px" }} src={logo} />
        </Link>

        <div style={{ display: "flex", gap: "1rem" }}>
          {user.user.name ? (
            <Button size="sm">Hi! {user.user.name.toUpperCase()}</Button>
          ) : (
            <Button size="sm">Hi! Guest</Button>
          )}

          <Button size="sm" variant="outline" onClick={onSignupOpen}>
            Signup
          </Button>
          <Button
            colorScheme="blue"
            color="white"
            size="sm"
            onClick={onLoginOpen}
          >
            Login
          </Button>
        </div>
      </div>

      <SignUp isOpen={isSignupOpen} onClose={onSignupClose} />
      <Login isOpen={isLoginOpen} onClose={onLoginClose} />
    </>
  );
};
