import axios from "axios";

export const getUserById = async (email, password) => {
  return await axios.post(`auth/login`, { email, password });
};
