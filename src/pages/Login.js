import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ReactDOM from 'react-dom';
import '../css/styles.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const Login = () => {
  const [teams, setKeys] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


  useEffect(() => {
    fetchKeys();
  }, []);

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

  const onFinish = values => {
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
          if (username === "kenia.picos@cetys.mx") {
            navigate('/eventos/expo-ingenierias/votacion/votacion-kn');
          } else if (username === "ulises.orozco@cetys.mx") {
            navigate('/eventos/expo-ingenierias/votacion/votacion-ur');
          } else if (username === "adan.hirales@cetys.mx") {
            navigate('/eventos/expo-ingenierias/votacion/votacion-ah');
          } else if (username === "vanessa.miranda@cetys.mx") {
            navigate('/eventos/expo-ingenierias/votacion/votacion-vm');
          } else if (username === "fermin.armenta@cetys.mx") {
            navigate('/eventos/expo-ingenierias/votacion/votacion-fa');
          } else if (username === "mauricio.odreman@cetys.mx") {
            navigate('/eventos/expo-ingenierias/votacion/votacion-mo');
          } else if (username === "marisela.martinez@cetys.mx") {
            navigate('/eventos/expo-ingenierias/votacion/votacion-ma');
          } else if (username === "xiomara.aguilar@cetys.mx") {
            navigate('/eventos/expo-ingenierias/votacion/votacion-xa');
          } else if (username === "jesus.camacho@cetys.mx") {
            navigate('/eventos/expo-ingenierias/votacion/votacion-jc');
          } else if (username === "nataly.medina@cetys.mx") {
            navigate('/eventos/expo-ingenierias/votacion/votacion-nm');
          } else if (username === "arturo.escoto@cetys.mx") {
            navigate('/eventos/expo-ingenierias/votacion/votacion-as');
          } else if (username === "benjamin.frias@cetys.mx") {
            navigate('/eventos/expo-ingenierias/votacion/votacion-bf');
          } else if (username === "marlon.gonzalez@cetys.mx") {
            navigate('/eventos/expo-ingenierias/votacion/votacion-mg');
          } else if (username === "gabriela.guzman@cetys.mx") {
            navigate('/eventos/expo-ingenierias/votacion/votacion-gg');
          } else if (username === "moises.sanchez@cetys.mx") {
            navigate('/eventos/expo-ingenierias/votacion/votacion-ms');
          }

          else {
            navigate('/eventos/expo-ingenierias/votacion/error');
          }

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

    <div class="d-flex justify-content-center align-items-center">

      <div class="w-400">
        <h1 class="text-align-cetner mt-3">Login</h1>
        <Form
          name="normal_login"
          className="login-form mt-3"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
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
              <Checkbox>Remember me</Checkbox>
            </Form.Item>


          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button mb-3">
              Log in
            </Button>
            Or <a href="./eventos/expo-ingenierias/registro" >Registrate!</a>
          </Form.Item>
        </Form>
      </div>
    </div>

  );
};


export default Login;