import express from "express";
const app = express();
app.use(express.json());
const port = 7000;

app.get("/", (req, res) => {
  res.send({
    nama: "Said Agil Siradz",
  });
});
app.get("/makanan", (req, res) => {
  res.send([
    {
      id: 1,
      nama: "Indomie",
      rasa: "Ayam bawang",
    },
    {
      id: 2,
      nama: "Gorengan",
      rasa: "Kadut",
    },
    {
      id: 3,
      nama: "Martabak",
      rasa: "Bangka",
    },
    {
      id: 4,
      nama: "Roti",
      rasa: "Jepang",
    },
  ]);
});
app.get("/minuman", (req, res) => {
  res.send([
    {
      id: 1,
      nama: "Teh",
      rasa: "Sosro",
    },
    {
      id: 2,
      nama: "Cofee",
      rasa: "Ya",
    },
    {
      id: 3,
      nama: "Sirup",
      rasa: "ABD",
    },
    {
      id: 4,
      nama: "Susu",
      rasa: "Janda",
    },
  ]);
});
app.post("/create", (req, res) => {
  res.send({
    nama: req.body,
  });
});

app.listen(port, () => {
  console.log(`Aplikasi Berjalan di port ${port}`);
});
