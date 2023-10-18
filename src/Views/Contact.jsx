import { Container } from "react-bootstrap";
import Fade from 'react-reveal/Fade';

const Contact = () => {
    return (
        <section id="contact">
            <Container>
                <Fade bottom duration={500} delay={600} distance="30px">
                    <h1>Contact Us</h1>
                    <p>Need help? Want to learn more?</p>
                    <a href="#"><span className="button button-hero">Send Us an Email</span></a>
                </Fade>
            </Container>
        </section>
    )
};

export default Contact;