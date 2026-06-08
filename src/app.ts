import express, {Request, Response, NextFunction} from "express";
import cors from "cors";
import itemsRouter from "./routes/items.routes";
import traitsRouter from "./routes/traits.routes";
import sessionRoutes from "./routes/session.routes";
import comparisonRoutes from "./routes/comparison.routes";
import profileRouter from "./routes/profile.routes";
import healthRouter from "./routes/health.routes";
import openApiSpec from "./docs/openapi";
import swaggerUi from "swagger-ui-express";

const app = express();

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV !== "production") {
  app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(openApiSpec)
  );
}
  
app.use("/items", itemsRouter);
app.use("/traits", traitsRouter);
app.use("/health", healthRouter);
app.get("/", (_req, res) => {
  res.json({ status: "ok",message: "running" });
});

app.use("/session", sessionRoutes);
app.use("/comparison", comparisonRoutes);
app.use("/profile", profileRouter);

app.use((
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.error("Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});


export default app;
