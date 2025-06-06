import "./Fashion.css"
const Fashion = () => {
    return(
        <div id="mainFashion">
            <h1>FASHION</h1>
            <section id="containerFashion">
                <div id="section1">
                    <img src="./images/loo1.jpg" alt="Modelo com uma roupa social" />
                    <p>Descubra uma coleção que vai além das tendências — feita para quem quer se destacar
                         com autenticidade, conforto e sofisticação. Cada peça foi pensada para valorizar
                          sua essência e acompanhar sua rotina com elegância, seja no trabalho, no passeio 
                          ou em momentos de expressão pessoal.</p>
                </div>
                <div id="section2">
                    <img src="./images/look2.jfif" alt="Modelo com uma roupa para o dia a dia" />
                    <p>A moda é a sua voz silenciosa — e aqui ela fala alto.
                         Nossa seleção traduz confiança e personalidade em cada
                          detalhe, com roupas que combinam atitude e estilo para 
                          quem não tem medo de se expressar. Vista-se como você 
                          realmente é: único, ousado e cheio de presença.</p>
                </div>
            </section>
        </div>
    )
}
export { Fashion }