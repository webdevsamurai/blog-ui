import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

const Client = axios.create({
  baseURL,
});

export default Client;
