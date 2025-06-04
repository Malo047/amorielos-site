import "./About.css"
const About = () => {
    return(
        <div id="mainAbout">
            <h1>ABOUT US</h1>
            <section id="aboutContainer">
                <div id="textAbout">
                    <p>Na [Nome da Empresa], acreditamos que a elegância está nos detalhes. 
                        Unimos design atemporal, tecidos de alta qualidade e um olhar 
                        apurado para criar peças que refletem sofisticação e autenticidade.
                         Desde a nossa fundação, temos como missão oferecer roupas que 
                         elevam a autoestima e acompanham nossos clientes em momentos 
                         especiais. Cada coleção é pensada com cuidado, trazendo um 
                         equilíbrio entre tendências e estilo clássico, para quem valoriza 
                         exclusividade e bom gosto.</p>
                </div>
                <div id="imageAbout">
                     <img src="./images/about-image.webp" alt="Prateleiras com roupas empilhadas"/>
                </div>
            </section>
        </div>
    )
}
export { About }