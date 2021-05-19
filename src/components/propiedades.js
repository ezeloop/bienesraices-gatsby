import React from 'react';
import Layout from '../components/layout';
import Iconos from './iconos';
import styled from '@emotion/styled';
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from 'gatsby';

const Contenido = styled.div `
    max-width: 1200px;
    margin: 0 auto;
    width: 95%;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 5rem;
    }

    .imagen {
        max-width: 800px;
        max-height: 500px;

        @media (max-width: 480px) {
        max-width: 100%;
        max-height: 300px;
    }
    }
    
`;

const Sidebar = styled.aside `
    .precio {
        font-size: 2rem;
        color: #75AB00;
    }
    .agente {
        margin-top: 4rem;
        border-radius: 2rem;
        background-color: #75AB00;
        padding: 3rem;
        color: #FFF;
        
        p{
            margin: 0;
        }
    }

`;

export const query = graphql`
query($id:String!){
    allStrapiPropiedades(filter: {id: {eq: $id}}) {
      nodes {
        nombre
        descripcion
        wc
        estacionamiento
        habitaciones
        precio
        agentes{
            nombre
            telefono
            email
        }
        imagen {
            sharp: childImageSharp {
                gatsbyImageData(layout: FIXED)
            }
        }
      }
    }
  }
  
`


const Propiedades = ({data: { allStrapiPropiedades: { nodes }}}) => {
    //y aca puedo hacer el llamado con el id, porq lo pase desde gatsby-node con el context

    const {nombre, descripcion, wc, estacionamiento, habitaciones, agentes, imagen, precio} = nodes[0]

    return (
        <Layout>
            <h1>{nombre}</h1>
            <Contenido>
                <main>
                    <GatsbyImage image={imagen.sharp.gatsbyImageData} className="imagen" alt="imagen propiedad"/>
                    <p>{descripcion}</p>
                </main>
                <Sidebar>
                    <p className="precio">$ {precio}</p>
                    <Iconos
                    wc={wc}
                    estacionamiento={estacionamiento}
                    habitaciones={habitaciones}
                />
                <div className="agente">
                    <h2>Vendedor: </h2>
                    <p>{agentes.nombre}</p>
                    <p>Tel: {agentes.telefono}</p>
                    <p>Email: {agentes.email}</p>
                </div>
                </Sidebar>
            </Contenido>
        </Layout>
    )
}

export default Propiedades;