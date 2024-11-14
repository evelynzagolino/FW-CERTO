import { Col, Container } from "react-bootstrap";
import Menu from "./modulos/navbar";
import Footer from "./modulos/footer";

export default function mesportes() {
    return <>
        < Menu />
        <Container>
            <Container className="text-center rounded-pill border border-primary col-8">
                Produtos de esportes
            </Container>
            <Container>
                dados
            </Container>
        </Container>
        <Footer />
    </>
}
