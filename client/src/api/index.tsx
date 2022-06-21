import axios from "axios";

const url = 'http://localhost:8080/users';

export const fetchUsers = () => axios.get(url);