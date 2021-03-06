import User from "../models/User.js";
import { BadRequestError } from "../errors/index.js";

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError("Please provide all values");
  }

  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    throw new BadRequestError("Email already in use");
  }

  const user = await User.create({ name, email, password });
  const token = user.createJWT();
  res.status(201).json({
    user: {
      email: user.email,
      name: user.name,
    },
    token,
  });
};

const login = (req, res) => {
  res.send("login user");
};

const updateUser = (req, res) => {
  res.send("update user");
};

export { register, login, updateUser };
