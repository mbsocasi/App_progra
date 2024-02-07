import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./routes";

import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";

import { TaskFormPage } from "./pages/TaskFormPage";
import { TasksPage } from "./pages/TasksPage";
import { TaskProvider } from "./context/tasksContext";


import { DietFormPage } from "./pages/DietFormPage";
import { DietsPage } from "./pages/DietsPage";
import { DietProvider } from "./context/dietsContext";

import CalculoCalorias from "./components/CalculoCalorias"; // Nueva importación


function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <DietProvider>


          <BrowserRouter>
            <main className="container content-container mx-auto px-10 md:px-0">
              <Navbar />
               <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route element={<ProtectedRoute />}>
                  <Route path="/tasks" element={<TasksPage />} />
                  <Route path="/add-task" element={<TaskFormPage />} />
                  <Route path="/tasks/:id" element={<TaskFormPage />} />


                  <Route path="/profile" element={<h1>Profile</h1>} />

                  <Route path="/diets" element={<DietsPage />} />
                  <Route path="/add-diet" element={<DietFormPage />} />
                  <Route path="/diets/:id" element={<DietFormPage />} />
                  <Route path="/profile" element={<h1>Profile</h1>} />


                  <Route path="/calculo-calorias" element={<CalculoCalorias />} />


                </Route>
              </Routes>
            </main>
          </BrowserRouter>
        </DietProvider>s
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
