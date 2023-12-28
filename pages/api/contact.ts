import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input!" });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.aj5uioa.mongodb.net/${process.env.mongodb_database}`;
    let client;
    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ message: "Connecting to database failed!" });
      return;
    }

    try {
      const db = client.db();
      const data = await db.collection("messages").insertOne(newMessage);
      res
        .status(201)
        .json({ message: "Successfully stored message!", data: newMessage });
    } catch (error) {
      res.status(500).json({ message: "Inserting message failed!" });
      return;
    }

    client.close();
  }
}
