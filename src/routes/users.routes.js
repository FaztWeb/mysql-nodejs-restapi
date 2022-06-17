import { Router } from "express";
import {
  deleteUser,
  getUsers,
  insertUser,
  updateUser,
} from "../models/users.model.js";

const router = Router();

router.get("/users", async (req, res) => {
  const users = await getUsers();
  res.status(200).json(users);
});

router.post("/users", async (req, res) => {
  const { username, email, password } = req.body;
  const userData = {
    username,
    email,
    password,
  };
  try {
    const result = await insertUser(userData);
    return res.json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.put("/users/:id", async (req, res) => {
  const userData = {
    id: req.params.id,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };

  const result = await updateUser(userData);

  if (result.affectedRows === 0)
    return res.status(404).json({ msg: "user not found" });

  return res.json(result);
});

router.delete("/users/:id", async (req, res) => {
  const id = req.params.id;
  const result = await deleteUser(id)
  if (result.affectedRows === 0)
    return res.status(404).json({ msg: "user not found" });

  return res.sendStatus(204);
});

export default router;
