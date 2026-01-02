
# 🛍️ Product Management Dashboard (React)

A modern **frontend-only product management application** built using **React + Tailwind CSS**.
This project demonstrates clean UI design, component-based architecture, and client-side state management without any backend.

---

## 🚀 Features

* ✅ Add new products with image upload
* ✅ Auto-generated unique Product IDs
* ✅ Grid View & List View toggle
* ✅ Product detail page with routing
* ✅ Search products by name (debounced)
* ✅ Pagination support
* ✅ Local storage persistence
* ✅ Responsive UI
* ✅ Clean & modular architecture

---

## 🏗️ Project Architecture

```
src/
│
├── components/
│   ├── ProductForm.jsx        # Add product + sample autofill
│   ├── ProductList.jsx        # Grid & List views
│   ├── ProductDetails.jsx     # Product detail page
│   ├── Pagination.jsx         # Pagination logic
│   └── SearchBar.jsx          # Debounced search
│
├── App.jsx                    # Main layout & routing
├── main.jsx                   # Entry point
└── index.css                  # Tailwind styles
```

---

## ⚙️ Tech Stack

* **React (Vite)**
* **Tailwind CSS**
* **React Router DOM**
* **LocalStorage** (for data persistence)
* **JavaScript (ES6+)**

---

## 🧠 Application Flow

### 1️⃣ Add Product

* User fills product form (name, price, category, image, etc.)
* Product stored in **React state**
* State is synced with **localStorage**
* Product instantly appears in the list

---

### 2️⃣ View Products

* Toggle between:

  * 🟦 Grid View (cards)
  * 📋 List View (table)
* Click any product to view full details

---

### 3️⃣ Product Details Page

* Dynamic route: `/product/:id`
* Shows full product information
* Includes back navigation

---

### 4️⃣ Search & Pagination

* Real-time search with debounce
* Pagination applied to filtered results
* Smooth UI experience

---

## 🔐 Data Handling Logic

| Feature       | Implementation        |
| ------------- | --------------------- |
| Data Storage  | `localStorage`        |
| ID Generation | `crypto.randomUUID()` |
| Persistence   | Auto sync on change   |
| Backend       | ❌ Not required        |

---

## 🧩 Why LocalStorage?

* No backend required
* Instant performance
* Data persists after refresh
* Perfect for frontend assignments

---

## ▶️ Setup Instructions

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Then open:

```
http://localhost:5173
```

---

## 🌟 Key Highlights

* Clean, scalable component structure
* Professional UI/UX
* Fully functional without backend
* Ideal for frontend interviews

---

## 📌 Future Enhancements (Optional)

* Edit / Delete product
* Dark mode
* Image preview modal
* Backend integration (Node + MongoDB)


