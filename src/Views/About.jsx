import { Container, Row, Col } from "react-bootstrap";
import Fade from 'react-reveal/Fade';
import { BiBuildings, BiCategoryAlt, BiHotel, BiMapAlt } from 'react-icons/bi';

const iconStyle = { fontSize: 36 };

const About = () => {
    return (
		<>
			<section id="about">
				<Fade left duration={500} delay={600} distance="30px">
					<Container>
						<div>
							<p className="title">
								<span className="white-color" style={{ fontWeight: "bold" }}>
									Tahiti
								</span>{" "}
								is a dream destination for travelers seeking an escape to paradise. From pristine beaches and crystal-clear lagoons to
								lush mountain landscapes and unique traditions, Tahiti offers a diverse range of experiences that cater to every
								traveler's desires.
							</p>
						</div>
					</Container>
				</Fade>
			</section>

			<section id="about-p2">
				<Fade left duration={500} delay={600} distance="30px">
					<Container>
						<div className="mb-5">
							<h2>Let's take a look</h2>
						</div>
						<Row>
							<Col lg={3} md={3} sm={6} xs={12} className="mb-lg-0 mb-4">
								<div style={{ marginBottom: 32 }}>
									<span className="about-icon">
										<BiBuildings style={iconStyle} />
									</span>
								</div>
								<div>
									<h5 className="secondary-color">About the Island</h5>
								</div>
								<div style={{ marginLeft: 30, marginRight: 30 }}>
									<p>Learn more about Tahiti's history, culture, and beauty.</p>
								</div>
							</Col>

							<Col lg={3} md={3} sm={6} xs={12} className="mb-lg-0 mb-4">
								<div style={{ marginBottom: 32 }}>
									<span className="about-icon">
										<BiHotel style={iconStyle} />
									</span>
								</div>
								<div>
									<h5 className="secondary-color">Tourism</h5>
								</div>
								<div style={{ marginLeft: 30, marginRight: 30 }}>
									<p>Get information and book your trip.</p>
								</div>
							</Col>

							<Col lg={3} md={3} sm={6} xs={12} className="mb-lg-0 mb-4">
								<div style={{ marginBottom: 32 }}>
									<span className="about-icon">
										<BiCategoryAlt style={iconStyle} />
									</span>
								</div>
								<div>
									<h5 className="secondary-color">Contact</h5>
								</div>
								<div style={{ marginLeft: 30, marginRight: 30 }}>
									<p>Questions? Comments? Send us a message.</p>
								</div>
							</Col>

							<Col lg={3} md={3} sm={6} xs={12} className="mb-lg-0 mb-4">
								<div style={{ marginBottom: 32 }}>
									<span className="about-icon">
										<BiMapAlt style={iconStyle} />
									</span>
								</div>
								<div>
									<h5 className="secondary-color">Map</h5>
								</div>
								<div style={{ marginLeft: 30, marginRight: 30 }}>
									<p>See a map of popular tourist destinations in Tahiti.</p>
								</div>
							</Col>
						</Row>
					</Container>
				</Fade>
			</section>
		</>
	);
};

export default About;