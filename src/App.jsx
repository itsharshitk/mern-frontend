import { Routes, Route, Link } from "react-router-dom";
import Counter from "./components/Counter";
import LoginForm from "./components/LoginForm";
import Title from "./components/UseEffect";
import NotFound from "./components/NotFound";
import Layout from "./common/Layout";
import ProtectedRoutes from "./common/ProtectedRoutes";

function App() {
  return(
    <>
      <Routes>

        <Route path="/" element={<Layout />}>
          
          <Route index element={<Counter />} />
          <Route path="/loginform" element={<LoginForm />} />
          <Route path="*" element={<NotFound />} />
          
          <Route element={<ProtectedRoutes />}>
            <Route path="/title/:id" element={<Title />} />
          </Route>

        </Route>
      
      </Routes>
    </>
  )
}

export default App
