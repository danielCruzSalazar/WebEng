import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ReactDOM from 'react-dom';
import '../css/styles.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from "axios";
import { useNavigate, myMap} from "react-router-dom";
import Swal from 'sweetalert2';
import { string,object } from 'yup';

const Login = () => {
  const [teams, setKeys] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


  useEffect(() => {
    fetchKeys();
  }, []);

  let userSchema = object({
    username: string().email().required(),
    password: string().required()

  });

  const fetchKeys = async () => {
    axios
      .get("http://localhost:4001/teams/all-keys")
      .then((response) => {
        setKeys(response.data);
        setLoading(false);
      })
      .catch((error) =>
        console.error(`There was an error retrieving the team list: ${error}`)
      );
  };
  

  const onFinish = async (values) => {
    
    const { username, password } = values

    axios.post("http://localhost:4001/teams/validatePassword", { username, password })
      .then(res => {
        if (res.data.validation) {

          //alert('Contraseña correcta, Bienvenid@!')
          Swal.fire({
            icon: 'success',
            title: 'Login Existoso!',
            text: 'Puedes cerrar esta ventana',
          });
          
          

          const emailMap = {
            "kenia.picos@cetys.mx": '/eventos/expo-ingenierias/votacion/votacion-kn',
            "ulises.orozco@cetys.mx": '/eventos/expo-ingenierias/votacion/votacion-ur',
            "adan.hirales@cetys.mx": '/eventos/expo-ingenierias/votacion/votacion-ah',
            "vanessa.miranda@cetys.mx": '/eventos/expo-ingenierias/votacion/votacion-vm',
            "fermin.armenta@cetys.mx": '/eventos/expo-ingenierias/votacion/votacion-fa',
            "mauricio.odreman@cetys.mx": '/eventos/expo-ingenierias/votacion/votacion-mo',
            "marisela.martinez@cetys.mx": '/eventos/expo-ingenierias/votacion/votacion-ma',
            "xiomara.aguilar@cetys.mx": '/eventos/expo-ingenierias/votacion/votacion-xa',
            "jesus.camacho@cetys.mx": '/eventos/expo-ingenierias/votacion/votacion-jc',
            "nataly.medina@cetys.mx": '/eventos/expo-ingenierias/votacion/votacion-nm',
            "arturo.escoto@cetys.mx": '/eventos/expo-ingenierias/votacion/votacion-as',
            "benjamin.frias@cetys.mx": '/eventos/expo-ingenierias/votacion/votacion-bf',
            "marlon.gonzalez@cetys.mx": '/eventos/expo-ingenierias/votacion/votacion-mg',
            "gabriela.guzman@cetys.mx": '/eventos/expo-ingenierias/votacion/votacion-gg',
            "moises.sanchez@cetys.mx": '/eventos/expo-ingenierias/votacion/votacion-ms'
          };

          const navigationPath = emailMap[username];
          if (navigationPath){
            navigate(navigationPath);
          }else{
            navigate('/eventos/expo-ingenierias/votacion/error');
          }
        

          // if (username === "kenia.picos@cetys.mx") {
          //   navigate('/eventos/expo-ingenierias/votacion/votacion-kn');
          // } else if (username === "ulises.orozco@cetys.mx") {
          //   navigate('/eventos/expo-ingenierias/votacion/votacion-ur');
          // } else if (username === "adan.hirales@cetys.mx") {
          //   navigate('/eventos/expo-ingenierias/votacion/votacion-ah');
          // } else if (username === "vanessa.miranda@cetys.mx") {
          //   navigate('/eventos/expo-ingenierias/votacion/votacion-vm');
          // } else if (username === "fermin.armenta@cetys.mx") {
          //   navigate('/eventos/expo-ingenierias/votacion/votacion-fa');
          // } else if (username === "mauricio.odreman@cetys.mx") {
          //   navigate('/eventos/expo-ingenierias/votacion/votacion-mo');
          // } else if (username === "marisela.martinez@cetys.mx") {
          //   navigate('/eventos/expo-ingenierias/votacion/votacion-ma');
          // } else if (username === "xiomara.aguilar@cetys.mx") {
          //   navigate('/eventos/expo-ingenierias/votacion/votacion-xa');
          // } else if (username === "jesus.camacho@cetys.mx") {
          //   navigate('/eventos/expo-ingenierias/votacion/votacion-jc');
          // } else if (username === "nataly.medina@cetys.mx") {
          //   navigate('/eventos/expo-ingenierias/votacion/votacion-nm');
          // } else if (username === "arturo.escoto@cetys.mx") {
          //   navigate('/eventos/expo-ingenierias/votacion/votacion-as');
          // } else if (username === "benjamin.frias@cetys.mx") {
          //   navigate('/eventos/expo-ingenierias/votacion/votacion-bf');
          // } else if (username === "marlon.gonzalez@cetys.mx") {
          //   navigate('/eventos/expo-ingenierias/votacion/votacion-mg');
          // } else if (username === "gabriela.guzman@cetys.mx") {
          //   navigate('/eventos/expo-ingenierias/votacion/votacion-gg');
          // } else if (username === "moises.sanchez@cetys.mx") {
          //   navigate('/eventos/expo-ingenierias/votacion/votacion-ms');
          // }

          // else {
          //   navigate('/eventos/expo-ingenierias/votacion/error');
          // }

        } else {
          Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'Contraseña incorrecta. Por favor, intenta de nuevo',
          });

        }

      })
    fetchKeys();
  };

  return (

    <main class="form-signin w-400 m-100">
      <div>
        <img className="d-inline-block align-top m-3"
                src="../logoCetysNvo.jpg"
                alt="User Profile"
                width="162"
                height="142"
              />
      </div>
      
        
        <Form
          name="normal_login"
          className="login-form bg-dark d-inline-block align-center col-md-7 col-lg-8 p-5"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <h1 class="text-align-center mt-1 mb-5 text-white fw-semibold fs-3">Iniciar Sesión</h1>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox className="text-white">Recordar cuenta</Checkbox>
            </Form.Item>


          </Form.Item>

          <Form.Item className="mt-5">
            <Button type="button" htmlType="submit" className="fw-semibold login-form-button btn btn-warning mb-3 fs-6">
            Iniciar Sesión
            </Button>
            <Button type="button" className="fw-semibold login-form-button btn btn-danger mb-3 fs-6 mt-3">
            Cerrar Sesión
            </Button>
            
          </Form.Item>
        </Form>
      
    </main>

  );
};


export default Login;