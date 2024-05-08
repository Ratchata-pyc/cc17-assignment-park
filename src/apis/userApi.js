import axios from "axios";
export const getUserById = async (id) => {
  return await axios.get(`/users/${id}`);
};
