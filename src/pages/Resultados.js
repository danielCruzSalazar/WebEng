import React, { useEffect, useState, useRef} from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import axios from "axios";

import Results_pda from "../components/results_pda"
import Results_cl from "../components/results_cl"
import Results_fyq from "../components/results_fyq"
import Results_IA from "../components/results_ia"
import Results_MT from '../components/results_mt'
import Results_Poster from '../components/results_poster'
import Results_SYS from '../components/results_sys'
import 'bootstrap/dist/css/bootstrap.min.css'

export const Resultados = () => {
  
  

  return (
    
    
    <Container className="p-2">
        <h1 className="p-3 fw-semibold">RESULTADOS DE LA VOTACION</h1>
        <Results_pda></Results_pda>
        <Results_cl></Results_cl>
        <Results_fyq></Results_fyq>
        <Results_IA></Results_IA>
        <Results_MT></Results_MT>
        <Results_Poster></Results_Poster>
        <Results_SYS></Results_SYS>
    </Container>

 

  );
};
export default Resultados;
