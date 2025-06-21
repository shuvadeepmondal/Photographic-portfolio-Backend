# 📸 Photographic Portfolio Backend

This is the backend for a **Photographic Portfolio Website** built using **Node.js**, **Express**, and **MongoDB**. It provides APIs to handle the **Gallery**, **Contact form**, and is scalable to include features like an admin panel and image uploads.

---

## 🔧 Tech Stack

- **Node.js** – JavaScript runtime
- **Express.js** – Server framework
- **MongoDB** – NoSQL database
- **Mongoose** – MongoDB ODM for Node.js
- **dotenv** – Load environment variables
- **CORS** – Cross-origin request sharing
- **Thunder Client / Postman** – API testing

---

## 📂 Project Structure

```
photographic-portfolio-backend/
├── models/                    # MongoDB schemas (Gallery, Contact)
│   ├── Contact.js
│   └── Gallery.js
│
├── controllers/               # Request logic (create/read entries)
│   ├── contactController.js
│   └── galleryController.js
│
├── routes/                    # API route definitions
│   ├── contactRoutes.js
│   └── galleryRoutes.js
│
├── config/                    # MongoDB connection config
│   └── db.js
│
├── .env                       # Environment variables (not pushed to Git)
├── .gitignore                 # Files/folders Git should ignore
├── server.js                  # Entry point
└── README.md                  # You're here 📄
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/photographic-portfolio-backend.git
cd photographic-portfolio-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a `.env` File

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/portfolioDB
```

Replace `<username>` and `<password>` with your MongoDB Atlas credentials.

### 4. Start the Server (Development Mode)

```bash
npm run dev
```
or

```bash
npm start
```

The server will start at: `http://localhost:5000`

---

## 📡 API Endpoints

### 📸 Gallery Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/gallery` | Get all photos |
| POST | `/api/gallery/add` | Add a new photo |

### ✉️ Contact Routes

| Method | Route | Description |
|--------|-------|-------------|
| POST | `/api/contact` | Submit contact form message |
| GET | `/api/contact` | Get all contact submissions |


### Other Routes are loading..............
---



## 📜 License

This project is licensed under the [MIT License](LICENSE).
