import { graphql, useStaticQuery } from 'gatsby';

const usePropiedades = () => {
    const datos = useStaticQuery(graphql`
    query {
        allStrapiPropiedades {
    
      nodes {
        nombre
        descripcion
        id
        wc
        precio
        estacionamiento
        habitaciones
        categorias{
                nombre
        }
        
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
      }}
    }
    `)

    // console.log(datos)

    return datos.allStrapiPropiedades.nodes.map(propiedad => ({
        nombre: propiedad.nombre,
        descripcion: propiedad.descripcion,
        imagen: propiedad.imagen,
        id: propiedad.id,
        wc: propiedad.wc,
        estacionamiento: propiedad.estacionamiento,
        habitaciones: propiedad.habitaciones,
        agentes: propiedad.agentes,
        precio: propiedad.precio,
        categorias: propiedad.categorias,


    }))
}

export default usePropiedades;