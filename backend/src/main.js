import express from "express";
const app = express();
app.use(express.json());
const port = 7000;

app.get("/", (req, res) => {
  res.send({
    nama: "Lutfi Husaeri",
  });
});
app.get("/makanan", (req, res) => {
  res.send([
    {
      id: 1,
      nama: "Baygon",
      rasa: "Bakar",
    },
    {
      id: 2,
      nama: "Nasi",
      rasa: "Kuning Tai",
    },
    {
      id: 3,
      nama: "Bakso",
      rasa: "Asam Urat",
    },
    {
      id: 4,
      nama: "Sop",
      rasa: "Tulang Knalpot",
    },
  ]);
});
app.get("/minuman", (req, res) => {
  res.send([
    {
      id: 1,
      nama: "Susu",
      rasa: "Dada Paha",
    },
    {
      id: 2,
      nama: "Es",
      rasa: "Oli yamalube",
    },
    {
      id: 3,
      nama: "Teh",
      rasa: "Tarik Tali BH",
    },
    {
      id: 4,
      nama: "Ice Cream",
      rasa: "Tiga Roda",
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
