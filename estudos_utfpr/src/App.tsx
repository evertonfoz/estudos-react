import { Box, ThemeProvider } from "@mui/material"
import "./App.css"
import { Header } from "./components/Header"
import { Layout } from "./components/Layout"
import { AppTheme } from "./config/appTheme"
import { Routes, Route } from "react-router-dom"
import { CategoryList } from "./features/categories/view/List"
import { CategoryEdit } from "./features/categories/view/Edit"

const App = () => {
  return <ThemeProvider theme={AppTheme}>
    <Box component={"main"} 
      sx={{
        height: "100vh",
        backgroundColor: (theme) => theme.palette.secondary.main,
        //  display: "flex", 
        //  flexDirection: "column", 
        //  alignItems: "center", 
        //  justifyContent: "center", 
        //  minHeight: "100vh", 
        //  bgcolor: "background.default", 
        //  color: "text.primary" 
      }}
    >
      <Header/>
      <Layout>
        <Routes>
          <Route path="/" element={<CategoryList />} />
          <Route path="/categories" element={<CategoryList />} />
          <Route path="/categories/create" element={<CategoryList />} />
          <Route path="/categories/edit/:id" element={<CategoryEdit />} />
          <Route path="*" element={<CategoryList />} />
        </Routes>
      </Layout>
    </Box>
  </ThemeProvider>
  // return (
    // return <Button variant="contained">Hello world</Button>;
    // <h1>Olá</h1>
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <Counter />
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to reload.
  //       </p>
  //       <Quotes />
  //       <span>
  //         <span>Learn </span>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           React
  //         </a>
  //         <span>, </span>
  //         <a
  //           className="App-link"
  //           href="https://redux.js.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Redux
  //         </a>
  //         <span>, </span>
  //         <a
  //           className="App-link"
  //           href="https://redux-toolkit.js.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Redux Toolkit
  //         </a>
  //         <span>, </span>
  //         <a
  //           className="App-link"
  //           href="https://react-redux.js.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           React Redux
  //         </a>
  //         ,<span> and </span>
  //         <a
  //           className="App-link"
  //           href="https://reselect.js.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Reselect
  //         </a>
  //       </span>
  //     </header>
  //   </div>
  // )
}

export default App
