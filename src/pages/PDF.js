// Documentacion:
// Para correr esta parte del programa sin errores es necesario instalar 
// un par de cosas en la computadora que se va a correr el programa
// a continuacion se presentan los comandos para los paquetes necesarios:

// npm install -g node
// npm install react-scripts 
// npm install pdfjs-dist
// npm install @react-pdf-viewer/core
// npm i @react-pdf-viewer/default-layout
// npm install -g create-react-app

import React, {useState} from "react"

import { Viewer } from "@react-pdf-viewer/core";
import {defaultLayoutPlugin} from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import { Worker } from "@react-pdf-viewer/core";

function PDFViewer() {

    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    const[pdfFile, setPdfFile]=useState(null);
    const[pdfFileError, setPdfFileError]=useState('');

    const[viewPdf, setViewPdf]=useState(null);

    const fileType=['application/pdf'];
    const handlePdfFileChange=(e)=>{
        let selectedFile=e.target.files[0];
        if(selectedFile){
            if(selectedFile&&fileType.includes(selectedFile.type)){
                let reader = new FileReader();
                    reader.readAsDataURL(selectedFile);
                    reader.onloadend = (e) => {
                        setPdfFile(e.target.result);
                        setPdfFileError('');
                    }
            }
            else{
                setPdfFile(null);
                setPdfFileError('Please select a valid PDF File');
            }
        }
        else{
            console.log('select your file');
        }
    }

    const handlePdfFileSubmit=(e)=>{
        e.preventDefault();
        if(pdfFile!==null){
            setViewPdf(pdfFile);
        }
        else {
            setViewPdf(null);
        }
    }

    return (
        <div className='container'>
        <br></br>
            <form className='form-group' onSubmit={handlePdfFileSubmit}>
                <input type="file" className='form-control'
                    required onChange={handlePdfFileChange}
                />
                {pdfFileError&&<div className="error-msg">{pdfFileError}</div>}
                <br></br>
                <button type="submit" className='btn btn-success btn-lg'>
                    UPLOAD
                </button>
            </form>
            <br></br>
            <h4>View PDF</h4>
            <div className='pdf-container'>
                {/* En esta seccion del codigo ocurria un error al correrlo debido a que la version de
                pdfjs-dist no era la misma que el de la api entonces se tiene que verificar que sean
                la misma version ambos para que corra correctamente, aqui ↓ se le puede modificar la 
                version al pdfjs-dist para que sea la misma que la de la api que el mensaje de error arroje. */}
                {viewPdf&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist/build/pdf.worker.min.js">
                    <Viewer fileUrl={viewPdf}
                        plugins={[defaultLayoutPluginInstance]}/>
                    </Worker></>}

                    {!viewPdf&&<>No PDF File Selected</>}
            </div>
        </div>
    )
}

export default PDFViewer;