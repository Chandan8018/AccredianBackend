import nodemailer from 'nodemailer';
import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';

const CLIENT_ID = 'YOUR_CLIENT_ID';
const CLIENT_SECRET = 'YOUR_CLIENT_SECRET';
const REDIRECT_URI = 'YOUR_REDIRECT_URI';
const REFRESH_TOKEN = 'YOUR_REFRESH_TOKEN';

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendReferralEmail(name: string, email: string, referredBy: string) {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'your-email@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken
      }
    });

    const mailOptions = {
      from: 'YOUR NAME <your-email@gmail.com>',
      to: email,
      subject: 'Referral Received',
      text: `Hi ${name},\n\nYou have been referred by ${referredBy}.\n\nThanks!`
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    throw new Error('Error sending email');
  }
}

export { sendReferralEmail };
