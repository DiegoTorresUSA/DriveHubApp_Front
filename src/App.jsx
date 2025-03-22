import React from 'react';
import MainLayout from "./components/MainLayout.jsx";
import Main from "./components/Main/Main.jsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AdminPanel from "./components/AdminPanel/AdminPanel.jsx";

const App = () => {
    return (
        <Router>
                <Routes>
                    {/* Ruta inicial: Aquí iría el panel principal o el contenido inicial */}
                    <Route path="/" element={<MainLayout><Main /></MainLayout>} />

                    {/* Ruta protegida o separada para AdminPanel */}
                    <Route path="/admin" element={<AdminPanel />} />
                </Routes>
        </Router>
    );
};

export default App;
