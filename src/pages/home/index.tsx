import { useNavigate } from "react-router-dom"
import Format from "../../components/format"
import ButtonFatec from "../../components/button-fatec"
import Layout from "../../components/layouts"


function Home(){
    const navigate = useNavigate()
    
    return(
        <Layout>
        <div>
        <h1>Home</h1>
        <ButtonFatec label='Teste botao' type={"submit"}></ButtonFatec>
        <Format></Format>
        <p>O projeto ConectaComunidades visa fortalecer comunidades locais através de uma plataforma online que facilita o 
        compartilhamento de recursos e ideias.</p>
        </div>
        </Layout>
        
    )
}

export default Home