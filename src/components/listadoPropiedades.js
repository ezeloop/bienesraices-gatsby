import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import usePropiedades from '../hooks/usePropiedades';
import PropiedadPreview from './propiedadPreview';
import styled from '@emotion/styled';
import useFiltro from '../hooks/useFiltro';

const Propiedades = styled.ul`
    display: grid;
    justify-content: center;
    max-width: 1200px;
    width: 95%;
    margin: 4rem auto 0 auto;

    @media( min-width: 480px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        row-gap: 2rem;
        column-gap: 2rem;
    }

    @media( min-width: 768px){
        grid-template-columns: repeat(3, 1fr);
    }

`;


const ListadoPropiedades = () => {

    const resultado = usePropiedades();

    const [propiedades] = useState(resultado);
    const [ filtradas, guardarFiltradas ] = useState([]);

    //para filtrados, siempre se necesitan 2 states, uno para mantener lo del hook , y usarlo para el proximo hook

    //primero en resultado mantengo la regerencia al hook usePropiedades, luego en propiedades, guardo ese resultado, luego creo otro useState
    // que va a guardar solo las filtradas

    //categoria y filtroui elije cual categoria elegi de el select

    //luego en el useEffect, si se selecciono categoria hace algo, y si no, filtradas sera igual a propiedades(todo el array de strapi)
    //si categoria está en true, filtro propiedades para q el resultado se guarde en una const filtro, dentro filtra si son iguales, 
    //se guarda ese filtro.Por lo tanto debajo en el return, se debe mostrar las propiedades recorriendo filtradas con map
    

    //filtrado de propiedades
    const { categoria, FiltroUi} = useFiltro();

    useEffect(() => {
        if(categoria){
            const filtro = propiedades.filter( propiedad => propiedad.categorias.nombre === categoria);
            guardarFiltradas(filtro);
        } else {
            guardarFiltradas(propiedades)
        }
        
    }, [categoria, propiedades])


    return (
        <div>
            <h2 css={css`
                margin-top: 5rem;
            `}>Nuestras Propiedades</h2>

            {FiltroUi()}

            <Propiedades>
                {filtradas.map(propiedad => (
                    <PropiedadPreview
                        key={propiedad.id}
                        propiedad={propiedad}
                        
                    />
                ))}
            </Propiedades>
        </div>

    );
}

export default ListadoPropiedades;