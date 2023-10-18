import { useScrollLock } from '@mantine/hooks';
import { Container, Row, Col } from "react-bootstrap";
import { HiMenuAlt2, HiX } from "react-icons/hi";
import { Link } from 'react-scroll';
import Fade from 'react-reveal/Fade';


const Hero = () => {
    let [lateralMenu, setLateralMenu] = useScrollLock(false);

    return (
        <section id="hero">

            <Container fluid style={{ height: '100vh' }} className="desktop">
                <Row style={{ height: '100vh' }}>

                    <Col lg={6} className="col-content">
                        <Fade bottom duration={500} delay={600} distance="30px">
                            <div className="header">
                                <div className="header-content">
                                    <div><a href="#"><b>Tahiti</b></a></div>
                                    <div style={{ display: 'flex' }}>
                                        <div className="navbar-item"><Link to="about" smooth duration={500}>About</Link></div>
                                        <div className="navbar-item"><Link to="details" smooth duration={500}>Tourism</Link></div>
                                        <div className="navbar-item" style={{ marginRight: 0 }}><Link to="contact" smooth duration={500}>Contact</Link></div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                        {Content()}
                    </Col>

                    <Col lg={6} className="p-0">
                        <Fade bottom duration={500} delay={600} distance="30px">
                            <img src={require("../Images/tahiti.jpeg")} alt="Hero" style={{ maxHeight: '100vh' }} />
                        </Fade>
                    </Col>

                </Row>
            </Container>

            <div className="mobile">
                <Fade bottom duration={500} delay={600} distance="30px">

                    <img src={require("../Images/tahiti.jpeg")} alt="Hero" />
                    <div className="header">
                        <div className="header-content">
                            <div><a href="#dennis"><b>Tahiti</b></a></div>
                            <div>
                                {!lateralMenu 
                                ? <HiMenuAlt2 style={{ fontSize: 24 }} onClick={() => setLateralMenu(true)} /> 
                                : <HiX style={{ fontSize: 24, color: lateralMenu ? "#383535" : "#eeeded"  }} onClick={() => setLateralMenu(false)} /> }
                            </div>
                        </div>
                    </div>
                    <Container fluid style={{ height: '100vh' }} className="content">
                        <div className="margin-adder">
                            {Content()}
                        </div>
                    </Container>

                </Fade>

                    <div style={{ display: lateralMenu ? 'block' : 'none' }} className="sidebar">
                        <Fade right duration={400} distance="30px">
                            <div className="sidebar-backdrop" />
                            <div className="sidebar-content">
                                <div className="menu-container">
                                    <div className="menu-title">Menu</div>
                                    <div className="menu-item"><Link to="about" smooth duration={500} onClick={() => setLateralMenu(false)}>About</Link></div>
                                    <div className="menu-item"><Link to="details" smooth duration={500} onClick={() => setLateralMenu(false)}>Details</Link></div>
                                    <div className="menu-item"><Link to="contact" smooth duration={500} onClick={() => setLateralMenu(false)}>Contact</Link></div>
                                </div>
                                <div className="menu-container" style={{ marginTop: 30 }}>
                                    <div className="menu-title">Contact</div>
                                    <div><a href="#">jmit758@wgu.edu</a></div>
                                </div>
                            </div>
                        </Fade>
                    </div>

            </div>

        </section>
    );
};

const Content = () => {
    return (
		<div>
			<Fade left duration={500} delay={600} distance="30px">
				<div className="mb-4">
					<h1 className="primary-color">Discover Paradise</h1>
					<h2>Learn more about Tahiti's beauty and culture.</h2>
					<p style={{ maxWidth: 550 }}>
						An exquisite journey into a world of unmatched natural beauty, vibrant Polynesian culture, and endless adventure.
					</p>
				</div>

				<Link to="about" smooth duration={500}>
					<span className="button button-hero" data-cursor-text="Click me">
						Learn More
					</span>
				</Link>
			</Fade>
		</div>
	);
}

export default Hero;