import React from 'react';
import MainLayout from "./components/MainLayout.jsx";
import Main from "./components/Main/Main.jsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <Router>
                <Routes>
                    {/* Ruta inicial: Aquí iría el panel principal o el contenido inicial */}
                    <Route path="/" element={<MainLayout><Main /></MainLayout>} />
                </Routes>
        </Router>
    );
};

export default App;
