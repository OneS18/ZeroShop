import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: "123456",
    isAdmin: true,
  },
  {
    name: "Trif Sergiu",
    email: "sergiu@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Ovidiu Povara",
    email: "ovidiu@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
