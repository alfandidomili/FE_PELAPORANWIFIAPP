import React from "react";
import MainTemplatePageCountainer from "../templates/MainTemplatePageCountainer";
import { theme, Row, Col, Card, Typography } from "antd";
import {
   DownloadOutlined,
   RiseOutlined,
   FallOutlined,
} from "@ant-design/icons";
import SecondHeaderLayout from "../molecules/SecondHeaderLayout";
import { Content } from "antd/es/layout/layout";

const { Title, Text } = Typography;

const DashBoard = () => {
   const {
      token: { colorBgContainer, borderRadiusLG },
   } = theme.useToken();
   return (
      <>
         <MainTemplatePageCountainer
            TitleHeaderPage={"Hi, Selamat Datang"}
            icon={<DownloadOutlined />}
            buttonName={"Unduh"}
            type={"primary"}
            TitleSecondHeaderPage={"Lihat apa yang kita lakukan hari ini"}
         />
         <Content
            style={{
               margin: "24px 16px",
               padding: "24px",
               minHeight: "68vh",
               width: "100%",
               overflow: "hidden",
               background: colorBgContainer,
               borderRadius: borderRadiusLG,
               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
         >
            <div style={{ textAlign: "center" }}>
               <Title level={1} style={{ color: "black", marginBottom: "24px" }}>
                  APLIKASI PELAPORAN MITRA INDIHOME PLASA TONDANO KANDATEL MINAHASA
               </Title>
               <Row gutter={[16, 16]} justify="center">
                  <Col xs={24} sm={12} lg={8}>
                     <Card
                        style={{
                           borderRadius: "8px",
                           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        }}
                     >
                        <RiseOutlined style={{ fontSize: '25px', color: '#1890ff', marginBottom: "16px" }} />
                        <Title level={3} style={{ color: "#1890ff" }}>Pasang Baru</Title>
                        <Text style={{ color: "#1890ff" }}>10%</Text>
                     </Card>
                  </Col>
                  <Col xs={24} sm={12} lg={8}>
                     <Card
                        style={{
                           borderRadius: "8px",
                           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        }}
                     >
                        <RiseOutlined style={{ fontSize: '25px', color: '#fe3e41', marginBottom: "16px" }} />
                        <Title level={3} style={{ color: "#fe3e41" }}>Gangguan</Title>
                        <Text style={{ color: "#fe3e41" }}>20%</Text>
                     </Card>
                  </Col>
               </Row>
            </div>
         </Content>
      </>
   );
};

export default DashBoard;
