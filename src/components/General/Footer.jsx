import {Link} from "react-router-dom"
import {Container, Row, Col} from "react-bootstrap"
import {Telegram, Facebook} from "react-bootstrap-icons"

import Logo from "./Logo"

const links1 = [
    {name: "Каталог", src: "/catalog"},
    {name: "Корзина", src: "/basket"},
    {name: "Избранное", src: "/favorites"},
    
]
const links2 = [
    {name: "Избранное", src: "/favorites"},
    {name: "Отзывы", src: "/"},
    {name: "О компании", src: "/"}
]

const isMobile = (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1)

const Footer = () => {
    return <footer>
        <Container className="d-block justify-content-center align-items-center">
            <Row>
                {isMobile ? <Col className="d-none" /> : <>
                <Col className="p-1 d-flex flex-column justify-content-around align-items-center" xs={12} lg={3}>
                    <Logo/>
                    <span style={{marginTop: "10px"}}>©{new Date().getFullYear()}</span>
                </Col>
                <Col className="p-1" xs={6} lg={3}>
                    <ul className="footer-nav" style={{justifyContent: "space-around"}}>
                        {links1.map(el => <li key={el.name}>
                                            <Link to = {el.src}>{el.name}</Link>
                                        </li>)}
                    </ul>
                    
                </Col>
                <Col className="p-1" xs={6} lg={3}>
                    <ul className="footer-nav" style={{justifyContent: "space-around"}}>
                            {links2.map(el => <li key={el.name}>
                                                <Link to = {el.src}>{el.name}</Link>
                                            </li>)}
                    </ul>
                </Col>
                </>}
                <Col
                    className={`p-1 d-flex flex-column justify-content-around align-items-center ${isMobile ? 'mb-4' : ''}`}
                    xs={12}
                    lg={3}>
                        <h4>мы на связи</h4>
                        <p className="phone-number">
                            <a href="tel:+7-812-678-78-78">+7 (812) 678-78-78</a>
                        </p>
                        <p className="email">
                            <a href="mailto:hello@cg.com">hello@cg.com</a>
                        </p>
                        <div className="social-network">
                            <a href="https://telegram.org"><Telegram/></a>
                            <a href="https://www.facebook.com"><Facebook/></a>
                        </div>
                </Col>
            </Row>
        </Container>
    </footer>
}
export default Footer