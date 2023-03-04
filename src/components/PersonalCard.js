import React, { Component } from "react";
import {Form, Container, Grid, Row, Col } from 'react-bootstrap';

class PersonalCard extends Component {

    render() {
        const { item } = this .props;

        return (
            <Container>
                <tr>
                    <td>fristName</td><td>{item.firstName}</td>
                </tr>
                <tr>
                    <td>lastName</td><td>{item.lastName}</td>
                </tr>
            </Container>
        )
    }


}
export default PersonalCard;