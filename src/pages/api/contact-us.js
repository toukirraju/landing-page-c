import nodemailer from "nodemailer";
import { Pool } from "pg";

export const runtime = "edge";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "cdda",
  password: "postgres",
  port: 5432,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, phone, businessname, description } = req.body;

  // SAVE DATA TO POSTGRESQL
  try {
    const client = await pool.connect();
    console.log("Connected to PostgreSQL");
    try {
      await client.query(
        "CREATE TABLE IF NOT EXISTS contacts (id SERIAL PRIMARY KEY, name VARCHAR(255), email VARCHAR(255), phone VARCHAR(255), businessname VARCHAR(255), description VARCHAR(255))"
      );
      await client.query(
        "INSERT INTO contacts (name, email, phone, businessname, description) VALUES ($1, $2, $3, $4, $5)",
        [name, email, phone, businessname, description]
      );
    } catch (error) {
      console.error("Error inserting data into PostgreSQL:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error("Error connecting to PostgreSQL:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }

  // SEND EMAIL
  const transporter = nodemailer.createTransport({
    // CONFIG HERE
    // port: 465,
    service: "gmail",
    auth: {
      user: "marufcdda319@gmail.com",
      pass: "occc shew onzf eidl",
    },
  });

  const mailOptions = {
    // from: email,
    to: "toukir@cdda.io",
    subject: "From Contact form CDDA",
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nBusiness Name: ${businessname}\nDescription: ${description}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Success" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
