import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bodyParser from 'body-parser';

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/api/referrals', async (req: Request, res: Response) => {
  const { name, email, referredBy } = req.body;

  if (!name || !email || !referredBy) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email' });
  }

  try {
    const referral = await prisma.referral.create({
      data: { name, email, referredBy }
    });

    // await sendReferralEmail(name, email, referredBy);

    res.status(201).json(referral);
  } catch (error) {
    if (error) {
      res.status(409).json({ error: 'Email already exists' });
    } 
    // else {
    //   res.status(500).json({ error: 'Internal Server Error' });
    // }
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
