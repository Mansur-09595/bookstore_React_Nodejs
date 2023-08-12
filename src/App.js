import React, { useState, useEffect } from 'react';
import Main from './componets/Main';
import load from "./img/taymaskha.jpg"
import Box from "@mui/material/Box";
import './App.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Установка состояния загрузки в false после завершения имитации загрузки
    }, 3000); // Задержка в миллисекундах
  }, []);

  return (
    <div className="main">
      {isLoading ? (
         <Box className="Box" sx={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh",}}>
          <div className='loads'>
            <h1 src={load} style={{ margin: "0 50px" }}>Ретроспектр. Таймасха</h1>
          </div>
        </Box>
      ) : (
        <Main />
      )}
    </div>
  );
};

export default App;
