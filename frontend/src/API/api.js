import axios from "axios";

export const signUpAPI = async (userData) => {
  try {
    const response = await axios.post(
      `http://localhost:8080/user/signup`,
      userData
    );
    console.log(" from api function", response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginAPI = async (userData) => {
  try {
    const response = await axios.post(
      `http://localhost:8080/user/login`,
      userData
    );
    console.log(" from api function", response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const devAPI = async (userData) => {
  try {
    const response = await axios.post(`http://localhost:8080/data`, userData);
    console.log(" from api function", response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getDataAPI = async () => {
  try {
    const res = await axios.get("http://localhost:8080/data-get/all");
    return res.data;
  } catch (error) {
    throw error;
  }
};
