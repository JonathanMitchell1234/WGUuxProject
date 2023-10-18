import { Container, Row, Col } from "react-bootstrap";
import Fade from 'react-reveal/Fade';

const Details = () => {
    return (
		<section id="details">
			<Container>
				<Fade left duration={500} delay={600} distance="30px">
					<div className="mb-5 text-center">
						<h2>Build the Vacation of Your Dreams...</h2>
					</div>
				</Fade>

				<Fade left duration={500} delay={600} distance="30px">
					<Row className="mb-5 mb-lg-0">
						<Col lg={8} className="p-4">
							<img src={require("../Images/beach.jpeg")} alt="Details1" data-cursor-text="Check out" />
						</Col>

						<Col lg={4} className="col-description">
							<div>
								<h3 style={{ fontWeight: "normal" }}>Beautiful Beaches...</h3>
								<p>Tahiti is home to many beautiful public beaches.</p>
								<a href="#">
									<span className="button button-hero">Learn More</span>
								</a>
							</div>
						</Col>
					</Row>
				</Fade>

				<Fade right duration={500} delay={600} distance="30px">
					<Row className="mb-5 mb-lg-0">
						<Col lg={4} className="col-description">
							<div>
								<h3 style={{ fontWeight: "normal" }}> Accommodation Choices for Every Budget...</h3>
								<p>Whether you're looking to spend a little or a lot on your vacation, Tahiti has a place for you.</p>
								<a href="#">
									<span className="button button-hero">Learn More</span>
								</a>
							</div>
						</Col>

						<Col lg={8} className="p-4">
							<img src={require("../Images/hotels.jpeg")} alt="Details2" data-cursor-text="Check out" />
						</Col>
					</Row>
				</Fade>

				<Fade left duration={500} delay={600} distance="30px">
					<Row className="mb-5 mb-lg-0">
						<Col lg={8} className="p-4">
							<img src={require("../Images/food.jpeg")} alt="Details3" data-cursor-text="Check out" />
						</Col>

						<Col lg={4} className="col-description">
							<div>
								<h3 style={{ fontWeight: "normal" }}>Where Should we Eat?</h3>
								<p>Whether it is local favorites or international chains, Tahiti has many choices.</p>
								<a href="#">
									<span className="button button-hero">Learn More</span>
								</a>
							</div>
						</Col>
					</Row>
				</Fade>
			</Container>
		</section>
	);
};

export default Details;