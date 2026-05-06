import express from "express";
import cors from "cors";

import sessionRoutes from "./routes/session.routes";
import comparisonRoutes from "./routes/comparison.routes";
import choiceRoutes from "./routes/choice.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok", service: "taste-api" });
});

app.use("/session", sessionRoutes);
app.use("/comparison", comparisonRoutes);
app.use("/choice", choiceRoutes);

export default app;
