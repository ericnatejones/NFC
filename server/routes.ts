import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertNewsletterSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Newsletter subscription endpoint
  app.post("/api/newsletter/subscribe", async (req, res) => {
    try {
      const data = insertNewsletterSchema.parse(req.body);
      
      // Check if email already exists
      const existing = await storage.getNewsletterByEmail(data.email);
      if (existing) {
        return res.status(400).json({ 
          message: "The chosen one has already received the calling" 
        });
      }

      const newsletter = await storage.subscribeNewsletter(data);
      res.json({ 
        message: "The calling has been received. You will be among the first to witness the resurrection.",
        id: newsletter.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Invalid email address - the waters demand a proper vessel" 
        });
      }
      res.status(500).json({ 
        message: "The destroyer has interfered with our communications" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
