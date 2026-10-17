/**
 * Serverless Route for Atom AI Assistant
 * Deployed automatically on Vercel as /api/atom
 */

import { processAtomChat, checkRateLimit } from "./atomEngine.js";

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      error: "Method not allowed. Only POST is supported.",
    });
  }

  // Rate limiting check
  const clientIp = req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "anonymous";
  if (!checkRateLimit(clientIp)) {
    return res.status(429).json({
      success: false,
      error: "Too many requests. Please wait a moment before sending another message.",
    });
  }

  try {
    const { message, history } = req.body || {};
    const result = await processAtomChat({ message, history });

    if (!result.success) {
      return res.status(result.status || 400).json(result);
    }

    return res.status(200).json(result);
  } catch {
    return res.status(500).json({
      success: false,
      error: "An internal error occurred while processing your question.",
    });
  }
}
