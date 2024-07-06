import express, { NextFunction, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bodyParser from 'body-parser';
import referralRoutes from './routes/referral.route';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api/referral', referralRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

interface CustomError extends Error {
  statusCode?: number;
}

//Error-Handling Middleware
app.use((err: CustomError, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
