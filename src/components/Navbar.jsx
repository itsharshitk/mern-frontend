import { Link } from "react-router-dom"

export default function Navbar(){
    return (
      <>
        <Link to="/">Home</Link> |
        <Link to="/loginform">LoginForm</Link> |
        <Link to="/title/23">TestUseEffect</Link> |
      </>
    )
}

