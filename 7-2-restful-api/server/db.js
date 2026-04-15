/** ===========================================
 *  db.js — Mongo connection helper
 *  -------------------------------------------
 *  TASK DB-1:
 *    - Export connectDB() that connects Mongoose using MONGO_URL
 *    - Log success; throw on failure
 */
import mongoose from "mongoose";

export async function connectDB(url) {
  try {
    await mongoose.connect(url);
    console.log("[DB] Mongo connected");
  } catch (err) {
    console.error("Connection error:", err.message);
    throw err;
  }
}

app.post("/api/songs", async (req, res) => {
  try {
    const { title = "", artist = "", year } = req.body || {};

    const created = await Song.create({
      title: title.trim(),
      artist: artist.trim(),
      year
    });

    res.status(201).json(created);
  } catch (err) {
    res.status(400).json({ message: err.message || "Validation failed" });
  }
});