import express from "express";
import { addContatos, deleteContatos, getContatos, updateContatos } from "../controllers/contatos.js";

const router = express.Router()

router.get("/", getContatos)

router.post("/", addContatos)

router.put("/:id", updateContatos)

router.delete("/:id", deleteContatos)

export default router