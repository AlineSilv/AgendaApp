import { db } from "../db.js";

export const getContatos = (_, res) => {
  const q = "SELECT * FROM contatos";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addContatos = (req, res) => {
  const q =
    "INSERT INTO contatos (`nome`, `idade`, `fone`) VALUES(?)";

  const values = [
    req.body.nome,
    req.body.idade,
    req.body.fone,
  ];

  db.query(q, values, (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Contato registrado com sucesso.");
  });
};


export const updateContatos = (req, res) => {
  const q =
    "UPDATE contatos SET `nome` = ?, `idade` = ?, `fone` = ? WHERE `id` = ?";

  const values = [
    req.body.nome,
    req.body.idade,
    req.body.fone,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Contato atualizado com sucesso.");
  });
};

export const deleteContatos = (req, res) => {
  const q = "DELETE FROM contatos WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Contato deletado com sucesso.");
  });
};