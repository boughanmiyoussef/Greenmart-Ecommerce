import express from "express";
import dotenv from "dotenv";

const app = express();

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server Is Running On http://localhost:${PORT}`);
});
