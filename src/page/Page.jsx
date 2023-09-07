import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import Dropdown from "../components/Dropdown";
import LineChart from "../components/LineChart";
import BubbleChart from "../components/BubbleChart";
import { Layout, Row, Col, Card, Typography } from "antd";
const { Header, Content } = Layout;

const Page = () => {
  const [category, setCategory] = useState("All Categories");

  const handleCategoryChange = (value) => {
    setCategory(value);
  };

  return (
    <>
      {/* ant design components Layout */}
      <Layout>
        <Header
          style={{
            color: "white",
            textAlign: "center",
            lineHeight: "22px",
            height: "28px",
          }}
        >
          Dummy Test User
        </Header>
        <Content style={{ backgroundColor: "#fff", padding: "2rem" }}>
          <Card
            bordered={false}
            style={{
              border: "2px solid black",
              borderRadius: 0,
              width: 500,
            }}
          >
            <Typography.Title level={2}>Welcome Test User!</Typography.Title>
            Check category below!!
          </Card>
          <div style={{ margin: "1rem", marginLeft: "2rem" }}>
            <Typography.Text
              style={{ fontSize: "1.3rem", marginRight: "2rem" }}
            >
              Select category data
            </Typography.Text>
            <Dropdown
              categories={[
                "All Categories",
                "category1",
                "category2",
                "category3",
              ]}
              category={category}
              onChange={handleCategoryChange}
            />
          </div>

          <div className="charts">
            <Row
              gutter={2}
              style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap" }}
            >
              <Col span={12}>
                <LineChart category={category} />
              </Col>
              <Col span={12}>
                <BubbleChart category={category} />
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default Page;
