import { Link, useNavigate } from "react-router-dom"
import Format from "../../components/format"


function Home(){
    const navigate = useNavigate()
    
    return(
        <div>
            <h1>Home</h1>
            <Format></Format>
            <p>O projeto ConectaComunidades visa fortalecer comunidades locais através de uma plataforma online que facilita o 
            compartilhamento de recursos e ideias.</p>
        </div>
        
        
    )
}

export default Home