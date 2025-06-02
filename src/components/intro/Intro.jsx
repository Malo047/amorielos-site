import "./Intro.css"
const Intro = () =>{
    return(
        <div id="introMain">
            <div id="imageIntro">
                <img src="/images/image-intro.avif" alt="Modelo sorridente em um estúdio" />
            </div>
            <div id="textIntro">
                <h1>Estilo que te acompanha.</h1><br />
                <p>Explore uma nova forma de se vestir com autenticidade, 
                    conforto e personalidade. <br /> Aqui, cada peça foi pensada 
                    para destacar quem você é, em cada passo, em cada 
                    olhar, em cada momento do seu dia.</p>
            </div>
        </div>
    )
}
export { Intro }