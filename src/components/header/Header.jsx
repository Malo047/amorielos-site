import "./Header.css"
const Header = () =>{
    return(
        <div id="header">
            <span id="logo">
                AMORIELOS
            </span>
            <ul id="menu">
                <li><a href="">HOME</a></li>
                <li><a href="">FASHION</a></li>
                <li><a href="">ABOUT</a></li>
                <li><a href="">CONTATO</a></li>
            </ul>
            <span id="profile">
                <img src="" alt="" />
            </span>
        </div>
    )
}
export { Header }