import { Link } from "react-router-dom"
import Format from "../../components/format"

const Topic = ({ title, content }) => {
    return (
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    );
  };

function Tarefas(){
    return(
        <div>
            <h1>Tarefas</h1>
            <Format></Format>
        <div>
      <Topic
        title="Tópico 1"
        content="Desenvolver e manter fóruns de discussão temáticos para diferentes áreas de interesse nas comunidades."
      />
      <Topic
        title="Tópico 2"
        content="Criar e atualizar um diretório abrangente de recursos locais, incluindo serviços de saúde, educação, emprego e lazer."
      />
      <Topic
        title="Tópico 3"
        content="Gerenciar um calendário de eventos comunitários para promover atividades sociais, culturais e educacionais."
      />
      <Topic
        title="Tópico 4"
        content="Facilitar campanhas de crowdfunding para apoiar projetos comunitários e iniciativas locais."
      />            
      {}
    </div>
        </div>

    )
}

export default Tarefas