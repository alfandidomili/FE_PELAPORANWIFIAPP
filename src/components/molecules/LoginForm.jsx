import React from "react";
import { Form, Button, Checkbox, Spin, Row, Col, Input } from "antd";
import { UserOutlined, LockOutlined, GoogleOutlined } from "@ant-design/icons";
import "./molecules.css";
import InputField from "../atoms/InputField";
import { Link } from "react-router-dom";


const LoginForm = ({ onFinish, loading, validationErrors }) => {
   return (
      <Form name="login" onFinish={onFinish} layout="vertical">
         <Form.Item
            name="usernameId"
            label={<strong style={{ fontWeight: "500" }}>Nomor Id</strong>}
            // rules={[
            //    { required: true, message: "Please input your usernameId!" },
            // ]}
            validateStatus={
               validationErrors &&
               Array.isArray(validationErrors) &&
               validationErrors.find((error) => error.name === "usernameId")
                  ? "error"
                  : ""
            }
            help={
               validationErrors &&
               Array.isArray(validationErrors) &&
               validationErrors.find((error) => error.name === "usernameId")
                  ? validationErrors.find(
                     (error) => error.name === "usernameId"
                  ).errors[0]
                  : ""
            }
         >
            <Input prefix={<UserOutlined />} placeholder="Masukkan Nomor Id" />
         </Form.Item>
         <Form.Item
            name="password"
            label={<strong style={{ fontWeight: "500" }}>Sandi</strong>}
            // rules={[
            //    { required: true, message: "Please input your password!" },
            // ]}
            validateStatus={
               validationErrors &&
               Array.isArray(validationErrors) &&
               validationErrors.find((error) => error.name === "password")
                  ? "error"
                  : ""
            }
            help={
               validationErrors &&
               Array.isArray(validationErrors) &&
               validationErrors.find((error) => error.name === "password")
                  ? validationErrors.find((error) => error.name === "password")
                     .errors[0]
                  : ""
            }
         >
            <Input.Password prefix={<LockOutlined />} placeholder="Masukkan Sandi" />
         </Form.Item>
         <Row
            justify="space-between"
            align={"middle"}
            style={{ marginBottom: "20px" }}
         >
            <Col xs={12}>
               <Form.Item
                  name="remember"
                  valuePropName="checked"
                  style={{ margin: 0, padding: 0 }}
               >
                  <Checkbox>Ingat Sandi</Checkbox>
               </Form.Item>
            </Col>
         </Row>
         <Row justify="space-between" align="middle">
            <Col span={24}>
               <Form.Item>
                  <Button
                     type="primary"
                     htmlType="submit"
                     block
                     disabled={loading}
                     style = {{ 
                        backgroundColor: "#Fe3e41",
                        transition: "background-color 0.3s ease",
                     }}
                     // className="bttn-login"
                     
                  >
                     {loading ? <Spin size="small" /> : "Masuk"}
                     
                  </Button>
               </Form.Item>
            </Col>
         </Row>
         {/* <Form.Item>
            <span>
               No registered ? <Link to="/register">Create An Account</Link>
            </span>
         </Form.Item> */}
      </Form>
   );
};

export default LoginForm;
