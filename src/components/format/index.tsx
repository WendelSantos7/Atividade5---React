import { Link } from 'react-router-dom'
import styles from './format.module.css'


function Format(){
    return(
        <div className={styles.format}>
        <Link to='/sobre'>Sobre o Projeto</Link> 
        <Link to='/'>Home</Link> 
        <Link to='/contato'>Contato</Link> 
        <Link to='/tarefas'>Tarefas</Link> 
    </div>
    )
}

    export default Format