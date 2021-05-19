import React from 'react';
import Iconos from './iconos';
import styled from '@emotion/styled';
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from 'gatsby';
import urlSlug from 'url-slug';

const Boton = styled(Link) `
    margin-top: 2rem;
    padding: 1rem;
    background-color: #75ab00;
    width: 100%;
    color: #fff;
    display: block;
    text-decoration: none;
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
`;

const Card = styled.div`
    border: 1px solid #E1E1E1;

    .imagenPropiedad {
        max-width: 400px;
        max-height: 300px;

    @media( max-width: 480px) {
       
    }
    }
`;

const Contenido = styled.div`
    padding: 2rem;

    h3 {
        font-family: 'Lato', sans-serif;
        margin: 0 0 2rem 0;
        font-size: 2.4 rem;
    }
    .precio {
        font-size: 2rem;
        color: #75AB00;
    }

    @media( max-width: 480px) {
        max-width: 100%;
    }

`;

const PropiedadPreview = ({ propiedad }) => {

    const { nombre, imagen, wc, estacionamiento, habitaciones, precio } = propiedad;

    return (
        <Card>
            
            <Contenido>
            <GatsbyImage className="imagenPropiedad" image={imagen.sharp.gatsbyImageData} alt="imagen propiedad"/>
                <h3>{nombre}</h3>
                <p className="precio">$ {precio}</p>
                <Iconos
                    wc={wc}
                    estacionamiento={estacionamiento}
                    habitaciones={habitaciones}
                />
                <Boton
                    to={urlSlug(nombre)}
                >
                    Visitar Propiedad
                </Boton>
            </Contenido>
        </Card>
    );
}

export default PropiedadPreview;