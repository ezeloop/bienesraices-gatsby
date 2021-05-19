import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';

const ImageBackground = styled(BackgroundImage) `
    height: 100vh;
`;

const DivImagenBg = styled.div `
    color: #fff;
    height: 100%;
    max-width: 1200px;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Titulo = styled.h1 `
    font-size: 2rem;
    margin: 0;
    max-width: 800px;
    
    @media (min-width: 992px) {
        font-size: 3rem;
        font-weight: 700;
    }
`;

const Home = () => {

    const { imagen } = useStaticQuery(graphql `
    query {
        imagen: file(relativePath: { eq: "destacada.jpg"}){
            sharp: childImageSharp {
                fluid(maxWidth: 1500 duotone: {
                    highlight: "#222222", shadow: "#192550", opacity: 30
                }) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
      }
    }
    `); 

    return ( 
        <ImageBackground
            tag= "section"
            fluid={imagen.sharp.fluid}
            fadeIn="soft"
        >
            <DivImagenBg>
                <Titulo>Venta de casas y departamentos exclusivos</Titulo>
            </DivImagenBg>
        </ImageBackground>
     );
}
 
export default Home;