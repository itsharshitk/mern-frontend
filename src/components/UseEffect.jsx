import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Title(){    
    const { id } = useParams();

    useEffect(() => {
        document.title = `TaskFlow ${id}`
    }, [id]);
    
    return (
        <>
            <h1>Welcome to TaskFlow</h1>
            <h3>The user's id is: {id}</h3>
        </>
    )
}

export default Title