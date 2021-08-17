import React, { useState } from 'react';
import { Col, Form, Row, Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

const Filter = ({ history }) => {
    const [keyword, setKeyword] = useState('');
    const [genres, setGenres] = useState('');
    const [rate, setRate] = useState(0);
    const [price, setPrice] = useState([0, 100]);

    const submitHandler = (e) => {
        e.preventDefault();
        history.push(
            `/search?keyword=${keyword}&genres=${genres}&rate=${rate}&bottom=${price[0]}&top=${price[1]}`
        );
    };

    const handleRange = (value) => {
        console.log(price[0])
        setPrice(value);
    }

    return (
        <Form onSubmit={submitHandler} className="filter">
            <Row>
                <Col>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter names"
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                </Col>
                <Col>
                    <Form.Label>Genres</Form.Label>
                    <select
                        onChange={(e) => setGenres(e.target.value)}
                    >
                        <option disabled>Open this genres type</option>
                        <option value="Action">Action</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Mystery">Mystery</option>
                        <option value="History">History</option>
                        <option value="Romance">Romance</option>
                        <option value="Sci-Fic">Sci-Fic</option>
                    </select>
                </Col>
                <Col>
                    <Form.Label>Choose Price Range</Form.Label>
                    <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip id="button-tooltip-2">From ${price[0]} to ${price[1]}</Tooltip>}
                    >
                        <Range min={0} max={100} allowCross={false} onChange={handleRange} />
                    </OverlayTrigger>
                </Col>
                <Col>
                    <Form.Label>Rating</Form.Label>

                    <select
                        onChange={(e) => setRate(e.target.value)}
                    >
                        <option disabled>Open this select rating</option>
                        <option value={0}>Zero</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                        <option value={4}>Four</option>
                        <option value={5}>Five</option>
                    </select>
                </Col>
                <Col className="text-center mt-1">
                    <Button type='submit' className='p-2'>
                        Search <i className="fas fa-search"></i>
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};

export default Filter;
