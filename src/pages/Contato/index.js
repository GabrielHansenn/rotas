import { Link } from "react-router-dom";

function Contato(){
    return(
        <div>
            <h1>Página do CONTATO</h1>
            <span>Gabriel Hansen</span>

            <br/>

            <Link to="/">Home</Link><br/>
            <Link to="/sobre">Sobre</Link><br/>

            <hr/>

            <Link to="/produto/1">Acessar Produto 1</Link>
        </div>
    );
}

export default Contato;