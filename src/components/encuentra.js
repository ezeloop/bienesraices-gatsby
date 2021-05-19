import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';

const ImageBackground = styled(BackgroundImage) `
    height: 300px;
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
        font-size: 2.3rem;
        font-weight: 100
    }
`;

const Encuentra = () => {

    const { imagen } = useStaticQuery(graphql `
    query {
        imagen: file(relativePath: { eq: "encuentra.jpg"}){
            sharp: childImageSharp {
                fluid(maxWidth: 1500) {
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
                <Titulo>Encuentra la casa de tus Sueños</Titulo>
                <p>15 Años de experiencia</p>
            </DivImagenBg>
        </ImageBackground>
     );
}
 
export default Encuentra;