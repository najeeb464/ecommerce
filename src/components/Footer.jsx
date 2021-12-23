import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'


const Container=styled.div`
display:flex;
`;

const Left=styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;
`;
const Center=styled.div`flex:1; padding:22px;`;
const Title=styled.h3`margin-bottom:30px;

`

const List=styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;

`
const Listitem=styled.li`
width:50%;
margin-bottom:20px;

`

const Right=styled.div` flex:1; padding:22px;`;
const Desc=styled.p`
margin:20px 0px;
`;
const SocialContainer=styled.div`
display:flex;

`
const SocialIcon=styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color:#${props=>props.color};
display:flex;
align-items:center;
justify-content:center;
margin-right:20px;
`

const ContactItem=styled.div``
const Payment=styled.img``
const Logo=styled.h1``
const Footer = () => {
    return (
        <Container>
     <Left>
         <Logo>LAMA.</Logo>
         <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vel consectetur molestias, ex ad quisquam dolore iste repudiandae sit earum natus recusandae velit beatae voluptates quod assumenda temporibus accusantium est!</Desc>
     <SocialContainer>
         <SocialIcon color="3B5999">
             <Facebook/>
         </SocialIcon>

         <SocialIcon color='E4405F'>
             <Instagram/>
         </SocialIcon>
         <SocialIcon color="55aCEE">
             <Twitter/>
         </SocialIcon>
         <SocialIcon color="E60023">
             <Pinterest/>
         </SocialIcon>

     </SocialContainer>
     </Left>
     <Center>
         <Title>Useful Links</Title>
         <List>

             <Listitem>Home</Listitem>
             <Listitem>Cart</Listitem>
             <Listitem>Man Fashion</Listitem>
             <Listitem>Woman Fashion</Listitem>
             <Listitem>Accessories</Listitem>
             <Listitem>My Account</Listitem>
             <Listitem>Order Tracking</Listitem>
             <Listitem>Wishlist</Listitem>
             <Listitem>Terms</Listitem>

         </List>
     </Center>
     <Right>
         <Title>Contact</Title>
         <ContactItem>
            <Room style={{marginRight:"10px"}}/> 123 ABc street Texas US
         </ContactItem>
         
         <ContactItem>
           <Phone style={{marginRight:"10px"}}/> +233333333
         </ContactItem>

         <ContactItem>
           <MailOutline style={{marginRight:"10px"}}/> contact@lamba.com
         </ContactItem>
         <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>

     </Right>
        </Container>
    )
}

export default Footer
