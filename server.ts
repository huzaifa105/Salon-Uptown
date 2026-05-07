import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Booking
  app.post("/api/book", (req, res) => {
    const bookingData = req.body;
    console.log("New Booking Received:", bookingData);
    // In a real app, you'd save to a DB or send email
    res.status(200).json({ success: true, message: "Appointment request received! We'll contact you soon." });
  });

  // API Route for Contact
  app.post("/api/contact", (req, res) => {
    const contactData = req.body;
    console.log("New Contact Message:", contactData);
    res.status(200).json({ success: true, message: "Message sent! We'll get back to you shortly." });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer();
