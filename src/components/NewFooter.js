import React from "react";
import {Form, Row, Col } from 'react-bootstrap';
import { Container,FooterLink,Heading } from "./FooterStyles";
import facebookimg from '../images/facebook.svg'
import twitterimg from '../images/twitter.svg'
// import facebook from './images/instagram.png'
// import twitter from './images/instagram.png'

const NewFooter = () => {
return (
	
		<Form>
			<Row>
				<Col xs={2} md={3} >
					
						<Heading><h4 >2rism</h4></Heading>
						<Col>We always make our customers happy by providing as many choises as possible</Col>
						<div>
								<img src={facebookimg}  width={24} height={24}/>
								<img src={twitterimg}  width={24} height={24}/>
								<img src={facebookimg}  width={24} height={24}/>
								<img src={facebookimg}  width={24} height={24}/>
						</div>
						<FooterLink></FooterLink>
				</Col>
				<Col xs={2} md={3} >
					<Heading>About </Heading>
					<FooterLink href="#">About us</FooterLink>
					<FooterLink href="#">Features</FooterLink>
					<FooterLink href="#">News</FooterLink>
					<FooterLink href="#">Menus</FooterLink>
				</Col>
				<Col xs={2} md={3}>
					<Heading>Company</Heading>
					<FooterLink href="#">Why 2rism</FooterLink>
					<FooterLink href="#">Partner With Us</FooterLink>
					<FooterLink href="#">FAQ</FooterLink>
					<FooterLink href="#">Blog</FooterLink>
				</Col>
				<Col xs={2} md={3}>
					<Heading>Support</Heading>
					<FooterLink href="#">Account</FooterLink>
					<FooterLink href="#">Support Center</FooterLink>
					<FooterLink href="#">Feedback</FooterLink>
					<FooterLink href="#">Feedback</FooterLink>
					<FooterLink href="#">Contact Us</FooterLink>
				</Col>
				<Col xs={2} md={3} >
					<Heading>Subscribe on our destination review newsletters</Heading>
					<FooterLink href="#">Account</FooterLink>
					
				</Col>
				
			</Row>
		</Form>

);
};
export default NewFooter;
