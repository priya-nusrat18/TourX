import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NewService from '../../Home/NewService/NewService';
import Footer from '../../Shared/Footer/Footer';
import MainNavbar from '../../Shared/MainNavbar/MainNavbar';
import Navbar from '../../Shared/Navbar/Navbar';
import BookForm from '../BookForm/BookForm';
import BookInfo from '../BookInfo/BookInfo';
import MoreBookInfo from '../MoreBookInfo/MoreBookInfo';
import PopularPackage from '../PopularPackage/PopularPackage';
import { useParams} from "react-router-dom";

const Book = () => {
    const {id} =useParams()
    return (
        <>
        <Navbar />
        <MainNavbar />
        <Container>
            <Row>
                <Col lg={8} md={8} sm={12} col={12}>
                    <BookInfo id={id} />
                    <MoreBookInfo />
                    </Col>
                <Col lg={4} md={4} sm={12} col={12}>
                    <BookForm  id={id} />
                    <PopularPackage />
                </Col>
            </Row>
        </Container>
        <NewService />
            <Footer />
        </>
    );
};

export default Book;