import { Routes, Route } from "react-router-dom";
import Counter from "./components/Counter";
import LoginForm from "./components/LoginForm";
import Title from "./components/UseEffect";
import NotFound from "./components/NotFound";

function App() {
  return(
    <Routes>
      <Route path="/" element={<Counter />} />
      <Route path="/loginform" element={<LoginForm />} />
      <Route path="/title" element={<Title />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
