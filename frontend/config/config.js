/*global process*/
import dotenv from 'dotenv'
dotenv.config()

const config = {
  backend_url: process.env.REACT_APP_BACKEND_URL
};

export default config;
