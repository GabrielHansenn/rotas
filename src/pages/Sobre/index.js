import { Link } from "react-router-dom";

function Sobre(){
    return(
        <div>
            <h1>Página Sobre a Empresa</h1>
            <span>Campo Real</span>

            <br/>

            <Link to="/home">Home</Link><br/>
            <Link to="/contato">Contato</Link><br/>

            <hr/>

            <Link to="/produto/1">Acessar Produto 1</Link>
        </div>
    );
}

export default Sobre;