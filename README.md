# 📊 Frontend – Monitoring Dashboard

A modern real-time monitoring dashboard built with React, featuring data visualization, filtering, and state management using Zustand.

---

## 🚀 Overview

The application consists of two main modules:

- **Surveillance Dashboard**
- **Network Dashboard**

Each module provides:

- Summary cards (high-level metrics)
- Data visualization (charts)
- Interactive data table

All components are synchronized and update in real-time using simulated data.

---

## 🧩 Features

### 1. Real-Time Data Simulation

- Data updates automatically at a fixed interval
- Implemented using a custom hook
- Updates are pushed into global state (Zustand)

### 2. Dashboard Components

- **Summary Cards** → Key metrics overview
- **Charts (Chart.js)** → Visual representation of data
- **Table** → Detailed data inspection

### 3. Interactive Table

- Search by keyword
- Filtering data
- Dynamic row limit (10, 20, ..., total data)

### 4. Global State Management

- Implemented using Zustand
- All components consume the same state

---

## 🧱 Tech Stack

- React + TypeScript
- Zustand (State Management)
- Chart.js (Data Visualization)
- Tailwind CSS (Styling)

---

## ⚙️ Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/rintosaputro/dashboard-monitoring.git
cd dashboard-monitoring
```

---

### 2. Install Dependencies

```bash
npm install
```

or

```bash
yarn install
```

---

### 3. Run Development Server

```bash
npm run dev
```

or

```bash
yarn dev
```

---

### 4. Open in Browser

```bash
http://localhost:5173
```

---

## 👨‍💻 Author

Rinto Saputro
