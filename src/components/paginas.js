import React from 'react';
import Layout from '../components/layout';
import styled from '@emotion/styled';
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from 'gatsby';
import ListadoPropiedades from './listadoPropiedades';

const ContenidoPagina = styled.div`
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
    }
    
`;


export const query = graphql`
query ($id: String!) {
    allStrapiPaginas(filter: {id: {eq: $id}}) {
      nodes {
        nombre
        contenido
        imagen {
            sharp: childImageSharp {
                gatsbyImageData(layout: FIXED)
            }
        }
      }
    }
  }
  
`


const Paginas = ({ data: { allStrapiPaginas: { nodes } } }) => {
    //y aca puedo hacer el llamado con el id, porq lo pase desde gatsby-node con el context

    const { nombre, contenido, imagen } = nodes[0]

    return (
        <Layout>
            <main className="contenedor">
                <h1>{nombre}</h1>
                <ContenidoPagina>
                    <GatsbyImage image={imagen.sharp.gatsbyImageData} className="imagen" alt="imagen propiedad" />
                    <p>{contenido}</p>
                </ContenidoPagina>
            </main>

            {nombre === "Propiedades" && (
                <ListadoPropiedades
                />
            )}
        </Layout>
    )
}

export default Paginas;