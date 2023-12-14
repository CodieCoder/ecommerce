const configurations = () => ({
  port: parseInt(process.env.SERVER_PORT, 10) || 4000,
  database: {
    host: process.env.DATABASE_HOST || '',
    port: parseInt(process.env.DATABASE_PORT) || 5432,
    type: process.env.DATABASE_TYPE || 'postgres',
    password: process.env.DATABASE_PASSWORD || '',
    username: process.env.DATABASE_USERNAME || 'postgres',
  },
})

export default configurations
