import { Routes, Route, Link } from "react-router-dom";
import Counter from "./components/Counter";
import LoginForm from "./components/LoginForm";
import Title from "./components/UseEffect";
import NotFound from "./components/NotFound";

function App() {
  return(
    <>
      <Link to="/">Home</Link> |
      <Link to="/loginform">LoginForm</Link> |
      <Link to="/title/23">TestUseEffect</Link>

      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/loginform" element={<LoginForm />} />
        <Route path="/title/:id" element={<Title />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
