import React from 'react';
import Layout from '../components/layout';
import useInicio from '../hooks/useInicio';
import { css } from '@emotion/react';
import Encuentra from '../components/encuentra';
import ListadoPropiedades from '../components/listadoPropiedades';
import Home from '../components/home';

const Index = () => {

    const inicio = useInicio();
    const { nombre, contenido } = inicio[0];

    return (
        <Layout>
            <Home/>
            <main>
                <div
                    css={css`
                    max-width: 800px;
                    margin: 0 auto;
                `}
                >
                    <h1>{nombre}</h1>
                    <p
                        css={css`
                    text-align: center;
                `}
                    >{contenido}</p>
                </div>
            </main>
            <Encuentra />
            <ListadoPropiedades/>

        </Layout>

    );
}

export default Index;