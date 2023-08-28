import GlobalStyle from "./GlobalStyles";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import TaskList from "./TaskList/TaskList";
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';



const lightTheme = {
  headerBgColor: '#fff',
  headerTextColor: '#000',
  headerHighlightColor: '#ff9800',
  heroBgColor : '#eee',
  heroTextColor : '#232222',
  taskListBgColor: '#eee',
  taskListTextColor: '#232222',
  taskHoverBorder: '2px solid #ff9800',
};

const darkTheme = {
  headerBgColor: '#333',
  headerTextColor: '#fff',
  headerHighlightColor: '#ff9800',
  heroBgColor : '#232222',
  heroTextColor : '#eee',
  taskListBgColor: '#232222',
  taskListTextColor: '#eee',
  taskHoverBorder: '2px solid #eee;',
};



function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Header setDarkMode={() => setIsDarkMode(prevState => !prevState)} isDarkMode={isDarkMode}/>
        <Hero />
        <TaskList />
    </ThemeProvider>
  );
}

export default App;
