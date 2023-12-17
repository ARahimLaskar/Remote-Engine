import React from "react";
import logo from "../assets/logo.png";
import { Button, useDisclosure } from "@chakra-ui/react";
import { SignUp } from "./SignUp";
import { Login } from "./Login";
import { useSelector } from "react-redux";

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
          backgroundColor: "#525659",
        }}
      >
        <img style={{ maxWidth: "80px" }} src={logo} />
        <div style={{ display: "flex", gap: "1rem" }}>
          {user.data.name ? (
            <Button size="sm">Hi! {user.data.name.toUpperCase()}</Button>
          ) : (
            <Button>Hi! Guest</Button>
          )}

          <Button size="sm" onClick={onSignupOpen}>
            Signup
          </Button>
          <Button size="sm" onClick={onLoginOpen}>
            Login
          </Button>
        </div>
      </div>

      <SignUp isOpen={isSignupOpen} onClose={onSignupClose} />
      <Login isOpen={isLoginOpen} onClose={onLoginClose} />
    </>
  );
};
