const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ObjectId } = require("mongodb");

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nx934.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();
    // console.log("database connected successfully");
    const database = client.db("form_builder");
    const formsCollection = database.collection("forms");
    const nameFromDatabase = client.db("name_from_builder");
    const nameFormsCollection = nameFromDatabase.collection("name_froms")

    // GET API
    app.get("/forms", async (req, res) => {
      const cursors = formsCollection.find({});
      const forms = await cursors.toArray();
      res.send(forms);
    });

    app.get("/form/:id", async (req, res) => {
      const cursor = formsCollection.find({ _id: ObjectId(req.params.id) });
      const form = await cursor.toArray();
      res.send(form[0]);
    });

    app.get("/name_forms", async (req, res) => {
      const cursor = nameFormsCollection.find({});
      const form = await cursor.toArray();
      res.send(form);
    });

    // POST API
    app.post("/forms", async (req, res) => {
      const newForm = req.body;
      const result = await formsCollection.insertOne(newForm);
      console.log("added form", result);
      res.json(result);
    });

    app.post("/name_forms", async (req, res) => {
      const newNameForm = req.body;
      const result = await nameFormsCollection.insertOne(newNameForm);
      console.log("added form", result);
      res.json(result);
    });
  } finally {
    // await client.close();
  }
}

run().catch(console.dir);

// console.log(uri);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
