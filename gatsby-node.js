const urlSlug = require('url-slug');

exports.createPages = async ({ actions, graphql, reporter }) => {
    const resultado = await graphql(`
    query MyQuery {
        allStrapiPaginas {
          nodes {
            nombre
            id
          }
        }
        allStrapiPropiedades {
          nodes {
            nombre
            id
          }
        }
      }
      
    `);
    

    //si no hay resultados
    if(resultado.error) {
      actions.createPage({
        path: '/404',
        component: require.resolve('./src/pages/404.js'),
    })
        reporter.panic('No hubo resultados', resultado.errors);
    }

    //si hay resultados generar los archivos estaticos

    const propiedades = resultado.data.allStrapiPropiedades.nodes;

    //este me va a servir para cuando desde la pagina propiedades, se presiono una propiedad en particular, entonces hay que agregar al path un prefijo
    const propiedadesDesdeOtraPath = resultado.data.allStrapiPropiedades.nodes;

    const paginas = resultado.data.allStrapiPaginas.nodes;

    //crear los templates de propiedades
    propiedades.forEach( propiedad => {
        actions.createPage({
            path: urlSlug(propiedad.nombre),
            component: require.resolve('./src/components/propiedades.js'),
            context: {
                id: propiedad.id
            }
        })
    })

    //crear los templates de paginas
    paginas.forEach( pagina => {
      actions.createPage({
          path: urlSlug(pagina.nombre),
          component: require.resolve('./src/components/paginas.js'),
          context: {
              id: pagina.id
          }
      })
      
  })

  //Debo agregar el prefijo propiedades/ porque estoy en la pagina propiedad y aprete ver una casa
  propiedadesDesdeOtraPath.forEach( prop => {
    actions.createPage({
        path: `propiedades/`+urlSlug(prop.nombre),
        component: require.resolve('./src/components/propiedades.js'),
        context: {
            id: prop.id
        }
    })
    
})
}