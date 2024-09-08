import { Box, useColorModeValue } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import Navbar from "./components/Navbar"

function App() {
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
      <Navbar /> {/* Put above Routes, cuz every page has Navbar */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<createPage />} />
      </Routes>
    </Box>
  );
}

export default App;
