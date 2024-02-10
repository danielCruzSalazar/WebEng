import React, { useEffect, useState, useRef} from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import axios from "axios";
import $ from 'jquery';
import 'datatables.net';

export const Results_cl = () => {
  
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  const tableRef = useRef(null);
  

  useEffect(() => {
    fetchTeams();

  }, []);

  useEffect(() => {
    // Check if $ is defined (jQuery is properly loaded)
    if ($) {
      const dataTable = $(tableRef.current).DataTable();
  
      // Cleanup function
      return () => {
        dataTable.destroy(); // Destroy DataTable instance to avoid memory leaks
      };
    } else {
      console.error('jQuery is not loaded.');
    }
  }, [teams]);


  const fetchTeams = async () => {
    axios
      .get("http://localhost:4001/teams/all-votes-table",{
        params: {
            table: "votes_competencialaberinto"
        }
      })
      .then((response) => {
        setTeams(response.data);
        setLoading(false);
      })
      .catch((error) =>
        console.error(`There was an error retrieving the team list: ${error}`));
  };


  return (
    <Container>
        <div>
        <h2 class="text-center m-auto mb-3">COMPETENCIA LABERINTO</h2>
        {loading ? (
            <p>Loading...</p>
        ):(
            
            <table ref={tableRef} class="table table-striped table-bordered dataTable">
            <thead class="table-dark">
              <tr>
                <th>Equipo</th>
                <th>Puntos</th>
              </tr>
            </thead>
            <tbody>
              {teams.map(data => (
                <tr key={data.id}>
                  <td>{data.team}</td>
                  <td>{data.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
                    
        )}
    </div>
    
    </Container>

  );
};
export default Results_cl;



