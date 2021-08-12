import React, { useEffect, useState }from 'react';
import './styles/footer.css'
import { Link } from 'react-router-dom';
import politicaPrivacidade from '../img/Politica_Privacidade.pdf';
import temosUso from '../img/Termos_de_uso.pdf';
// import { api } from "../services/api";
import axios from 'axios';

const  FooterContato = () => {

    // useEffect(() => {
    
    //     // setItens({})
    //     // api.post("/send").then((res) => setInputValue(res.data));
        
    // }, []);

    // const [emailUser,setEmailUser] = useState('')
    // const [emailNome,setEmailNome] = useState('')



    // function handleSubmit(e){
    //     e.preventDefault();
    //     axios.post("https://gamaxpfinalapi.herokuapp.com/send", {emailUser:emailUser,emailNome:emailNome})
    // }
    
    
    return (
        <section id="contato">
            <div className="contato">
                <div className="description-contato">
                    <h2>
                        Era uma vez...
                    </h2>
                    <p>
                        Um grupo de amigos que acreditavam que a leitura tinha o poder de transformar vidas. Esses amigos uniram suas habilidades para criar um portal mágico cujo propósito é unir crianças (de todas as idades) ao mundo encantado que existe dentro das páginas de cada livro.
                    </p>
                    <strong>
                        Precisa de ajuda?
                    </strong>
                    <p>
                        Entre em contato através do e-mail suporte@livrertido.com.br
                    </p>
                    <strong>
                       <Link to={politicaPrivacidade} target="_blank" className="politica-privacidade">Política de privacidade </Link> <br></br> <Link to={temosUso} target="_blank" className="politica-privacidade">Termos de uso</Link> 
                    </strong>
                </div>
                <div className="formulario">
                    <h3>Fique por dentro das novidades</h3>
                    <form method="post">       
                        <input type="text" placeholder="Seu nome" /> 
                        {/* onChange={(e) => setEmailNome(e.target.value) } */}
                        <input type="email" placeholder="Email"   required />
                        {/* onChange={(e) => setEmailUser(e.target.value) } */}
                        <button type="submit">Quero receber novidades</button>
                    </form>
                </div>
            </div>
        </section>
    )
};

export default FooterContato;

