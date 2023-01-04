import dotenv from 'dotenv';

interface Configuration {
  port: string;
}

dotenv.config();

const config: Configuration = {
  port: process.env.API_PORT || '3000'
};

export default config;
