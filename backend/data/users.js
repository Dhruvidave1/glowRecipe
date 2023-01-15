// to encrypt passwords
import bcrypt from 'bcryptjs'

const users = [
  {
    // the fields here need to match the fields we have for the user model
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    // the fields here need to match the fields we have for the user model
    name: 'John Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    // the fields here need to match the fields we have for the user model
    name: 'Jane Doe',
    email: 'jane@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users

// next create seeder script
