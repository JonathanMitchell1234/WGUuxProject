import { Container, Row, Col } from "react-bootstrap";
import { DiReact } from "react-icons/di";
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"; 
import { Link } from 'react-scroll';

const iconStyle = { fontSize: 23 };

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col lg={6} xs={12} className="footer-col mb-4 mb-md-0">
                        <div>
                            <h2><a href="https://github.com/Giuseppetm/elegalio">Tahiti</a></h2>
                        </div>
                        <div>Created with React.JS and React-Bootstrap. <br/ >
                        Project By: Jonathan Mitchell</div>
                        <div className="social-icons">
                            <a href="#" className="social-link"><span className="circle-icon"><DiReact style={iconStyle} /></span></a>
                            <a href="#" className="social-link"><span className="circle-icon"><AiFillFacebook style={iconStyle} /></span></a>
                            <a href="#" className="social-link"><span className="circle-icon"><AiFillInstagram style={iconStyle} /></span></a>
                            <a href="#" className="social-link"><span className="circle-icon"><AiFillLinkedin style={{ fontSize: 23, marginRight: 0 }} /></span></a>
                        </div>
                    </Col>

                    <Col lg={3} sm={6} xs={12} className="footer-col mb-4 mb-md-0">
                        <div>
                            <div className="menu-title">MENU</div>
                            <div className="menu-item"><Link to="#" smooth duration={500} >About</Link></div>
                            <div className="menu-item"><Link to="#" smooth duration={500}>Tourism</Link></div>
                            <div className="menu-item"><Link to="#" smooth duration={500}>Contact</Link></div>
                        </div>
                    </Col>

                    <Col lg={3} sm={6} xs={12} className="footer-col">
                        <div>
                            <div className="menu-title">OTHER LINKS</div>
                            <div className="menu-item"><a href="#">Sample 1</a></div>
                            <div className="menu-item"><a href="#">Sample 2</a></div>
                            <div className="menu-item"><a href="#">Sample 3</a></div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </footer>
    )
};

export default Footer;