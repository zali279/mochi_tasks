import { Request, Response, NextFunction } from "express";

export const createError = (message: string, status: number = 500) => ({
  message,
  status,
});

export const errorHandler = (
  err: { message: string; status?: number },
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};
