import img from "../../assets/img/logo.png"

const Logo = () => {
    return <a href="/">
        <img src={img} alt="DogFood" className="logo" width="70px" />
        <span>КусьГусь</span>
    </a>
}

export default Logo;