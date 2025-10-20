
```markdown
# 🧩 Task 3 — React Web UI for Kaiburr Task Manager

This project implements the **frontend (web interface)** for the Kaiburr Task Management Application, built using **React.js**.  
It connects with the **Spring Boot + MongoDB backend** (from Task 1) to perform CRUD operations — Create, Read, Update, and Delete — on tasks.

---

## 🎯 Objective

To design and develop an intuitive **React-based web interface** that communicates with the backend REST API.  
This UI allows users to interact visually with task data stored in MongoDB.

---

## 🧰 Technologies Used

| Component | Purpose |
|------------|----------|
| **React.js** | Frontend library for building UI |
| **Axios / Fetch API** | Handling HTTP requests |
| **Bootstrap / CSS** | Styling and responsive design |
| **JavaScript (ES6)** | Logic and rendering |
| **Node.js + npm** | Development and package management |

---

## ⚙️ Features

✅ Add new tasks  
✅ View existing tasks  
✅ Update task details  
✅ Delete tasks  
✅ Connects with Spring Boot backend running on `http://localhost:8080/tasks`  

---

## 📁 Project Structure

```

Task-3/
│
├── public/
│   ├── index.html
│   └── favicon.ico
│
├── src/
│   ├── components/
│   │   ├── TaskList.js
│   │   ├── TaskForm.js
│   │   └── TaskCard.js
│   ├── services/
│   │   └── api.js
│   ├── App.js
│   ├── index.js
│   └── App.css
│
├── package.json
└── README.md

````

---

## ⚙️ Backend API Integration

| HTTP Method | Endpoint | Description |
|--------------|-----------|--------------|
| `GET` | `/tasks` | Retrieve all tasks |
| `PUT` | `/tasks` | Create or update a task |
| `GET` | `/tasks/{id}` | Retrieve a specific task |
| `DELETE` | `/tasks/{id}` | Delete a task |

---

## 🚀 How to Run the Application

1. Clone the repository:
   ```bash
   git clone https://github.com/Sara1220-up/Kaiburr_Task_3.git
   cd Kaiburr_Task_3
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Access the app in your browser at:
   👉 [http://localhost:3000](http://localhost:3000)

> ⚠️ Make sure your **Task 1 backend** is running on `http://localhost:8080` before starting the frontend.

---

## 🧠 Workflow Overview

1. **Backend Connection** — The React frontend uses Axios to fetch data from the Spring Boot API.
2. **Data Rendering** — Tasks are displayed dynamically using reusable components.
3. **State Management** — Managed through React hooks (`useState`, `useEffect`).
4. **User Interaction** — Any changes reflect instantly in the UI and MongoDB.

---

## 🧾 Screenshots & Verification

### ⚙️ Spring Boot Simulation and Backend Enabled 

![Spring Boot Simulation](./Task%203/springboot_simulation.png)

### 🧠 Frontend Successfully Implemented

![Frontend Implemented](./Task%203/Fronted_Succesfully_Implemented.png)

### 🔗 Connection Established

![Connection Successful](./Task%203/connection%20was%20done.png)

### ⚛️ React App Created

![React App Created](./Task%203/React_app_creadted.png)

### ✅ Confirmation of Task Creation

![Task Creation Confirmation](./Task%203/Confirmation_of_Task_Creation.png)

### 📋 Tasks Displayed

![Tasks Displayed](./Task%203/Tasks_Created.png)

### 🗑️ Deleting a Task

![Deleting Task](./Task%203/deleting_task.png)

### ❌ Task Deletion Confirmed

![Task Deletion Confirmed](./Task%203/Task_Deletion_Confirmed.png)



---

## 🧩 Outcome

✅ React app successfully connected to Spring Boot backend
✅ CRUD operations verified from UI and database
✅ Clean and interactive task management interface built

---

## 👩‍💻 Author

**Sarayu Mandadi**
📦 Kaiburr Internship — Task 3 Submission
📧 GitHub: [Sara1220-up](https://github.com/Sara1220-up)

```



