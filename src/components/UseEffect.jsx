import { useEffect } from "react";

function Title(){
    useEffect(() => {
        document.title = "TaskFlow"
    }, []);
    
    return <h1>Welcome to TaskFlow</h1>
}

export default Title;