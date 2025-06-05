import "./Contact.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
const Contact = () => {
    return(
        <div id="mainContact">
            <h1>CONTACT</h1>
            <section id="contactContainer">
                <div id="contact">
                    <h1>Entre em contato com a gente!</h1>
                    <p>Você pode estar entrando em contato com a gente
                        por meio de nossos canais oficiais! <br />
                        Entre no nosso grupo do WhatsApp e fique por 
                        dentro de nossas promoções e sorteios. <br />
                        VENHA CONFERIR
                    </p>
                   <a href="www.instagram.com"><i class="fa-brands fa-instagram"></i></a>
                   <a href="www.facebook.com"><i class="fa-brands fa-facebook"></i></a>
                   <a href="www.whatsapp.com"><i class="fa-brands fa-whatsapp"></i></a>
                </div>
                <footer>
                    <hr />
                    <p>Desenvolvido por Marlon Hoffmann. <br />
                    Somente para fins didáticos. <br />
                    05/06/2025</p>
                    <a href="https://www.linkedin.com/in/marlon-hoffmann-461665268/"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/Malo047/amorielos-site"><i class="fa-brands fa-github"></i></a>
                </footer>
            </section>
        </div>
    )
}
export { Contact }