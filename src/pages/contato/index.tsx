import { Link } from "react-router-dom"
import Format from "../../components/format"
import CustomInput from "./input"

function Contato(){
    return(
        <div>
            <h1>Contato</h1>
            <Format></Format>
            <div>
      <h1>Formulário</h1>
      <form>
        <div>
          <label htmlFor="nome">Nome:</label>
          <CustomInput type="text" placeholder="Digite seu nome" initialValue={undefined} />
        </div>
        <div>
          <label htmlFor="email">E-mail:</label>
          <CustomInput type="email" placeholder="Digite seu e-mail" initialValue={undefined} />
        </div>
        <div>
          <label htmlFor="telefone">Telefone:</label>
          <CustomInput type="tel" placeholder="Digite seu telefone" initialValue={undefined} />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
        </div>

    )
}

export default Contato