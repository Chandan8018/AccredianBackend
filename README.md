# 🚀 Refer & Earn Backend

Welcome to the backend service for the Refer & Earn application! This service handles user referrals and notifications using a robust stack of modern technologies.

## 🛠️ Technologies Used

- **TypeScript** - For type-safe JavaScript
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MySQL2** - Database driver
- **Prisma ORM** - Database ORM
- **Nodemailer** - For sending emails
- **Mailgen** - For generating email templates
- **Nodemon** - For automatic server restarts
- **Dotenv** - For managing environment variables

## 📦 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/refer-earn-backend.git
  ```

2. **Backend Setup**:
    ```bash
    npm install
    ``` 

3. **Environment Variables**:
    - Create a `.env` file in the root directory and add your MySQL URI, EMAIL, and other necessary environment variables.
    ```bash
    DATABASE_URL="mysql://userName:password@localhost:3306/refer_and_earn"
    EMAIL="name@gmail.com"
    PASSWORD="zhdwrvnm*****"
    ``` 

4. **Run Prisma migrations**:
    ```bash
    npx prisma migrate dev
    ``` 

5. **Start the server**:
    ```bash
    npm run dev
    ``` 
## Folder Structure

```sh
.
├── src
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── services
│   └── utils
├── prisma
│   └── schema.prisma
├── .env
├── package.json
└── tsconfig.json
```

## Demo
- Invoice Generation Page
![AfterInvoice](./frontend/public/invoice2.png)
---

## Contact
For any questions or inquiries, please contact:

- Author: Chandan Kumar Sahoo
- Email: chandankumarsahoo19@gmail.com
- GitHub: https://github.com/Chandan8018/

Feel free to reach out for any questions, suggestions, or contributions. Happy coding!