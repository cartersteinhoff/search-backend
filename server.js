const express = require("express");
const app = express();
const { Pool } = require("pg");



const connectionString =
  process.env.CONNECTSTRING;

const port = 3000;
app.use(express.json());

const pool = new Pool({
  connectionString,
});

//first argument for HTTP methods - endpoint, second argument - callback function that is route handler
app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW();");
    res.send(result.rows[0].now);
  } catch (err) {
    res.send(err);
  }
});

// app.get("/post/:id", (req, res) => {
//   const filteredPost = posts.filter((post) => post.id === +req.params.id)[0];
//   res.send(filteredPost);
// });

// app.get("/posts", (req, res) => {
//   res.send(posts);
// });

// app.post("/post", (req, res) => {
//   posts.push({
//     id: posts.length + 1,
//     text: req.body.text,
//   });
//   res.send("post added!");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
