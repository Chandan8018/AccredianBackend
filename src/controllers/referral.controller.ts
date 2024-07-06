import express, { NextFunction, Request, Response } from 'express';
import { errorHandler } from "../utils/error";
import { PrismaClient } from '@prisma/client';

export const createReferral = async (req: Request, res: Response, next: NextFunction) => {
  const prisma = new PrismaClient();
  const { name, email, referredBy } = req.body;

  if (!name || !email || !referredBy) {
    return next(errorHandler(400, "Missing fields"));
    // return res.status(400).json({ error: 'Missing fields' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return next(errorHandler(400, "Invalid email"));
    // return res.status(400).json({ error: 'Invalid email' });
  }

  try {
    const referral = await prisma.referral.create({
      data: { name, email, referredBy }
    });

    // await sendReferralEmail(name, email, referredBy);

    res.status(201).json(referral);
  } catch (error) {
    if (error) {
      return next(errorHandler(409, "Email already exists"));
      // res.status(409).json({ error: 'Email already exists' });
    } 
    // else {
    //   res.status(500).json({ error: 'Internal Server Error' });
    // }
  }
}