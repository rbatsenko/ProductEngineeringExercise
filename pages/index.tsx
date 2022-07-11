import { FunctionComponent } from "react";
import { GetStaticProps } from "next";
import { Card, Col, Row } from "antd";
import axios from "axios";

import "antd/dist/antd.css";
import { Person, Company } from "@models/data";

type KanbanPageProps = { personData: Person[]; companyData: Company[] };

const API_URL = process.env.API_URL!;

const KanbanPage: FunctionComponent<KanbanPageProps> = ({
  personData,
  companyData,
}) => {
  console.log(personData);
  console.log(companyData);

  return (
    <div style={{ margin: "100px" }}>
      <h1>Kanban Board</h1>
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={8}>
            <h2>Signed Up</h2>
            {companyData.map((company) => (
              <div key={company.id} style={{ marginBottom: "16px" }}>
                <Card title={company.name}>
                  <strong>Signed Up:</strong> {company.signed_up}
                </Card>
              </div>
            ))}
          </Col>
          <Col span={8}>
            <h2>At Least 2 Users</h2>
            {companyData.map((company) => (
              <div key={company.id} style={{ marginBottom: "16px" }}>
                <Card title={company.name}>
                  <strong>Signed Up:</strong> {company.signed_up}
                </Card>
              </div>
            ))}
          </Col>
          <Col span={8}>
            <h2>At Least 3 Comments</h2>
            {companyData.map((company) => (
              <div key={company.id} style={{ marginBottom: "16px" }}>
                <Card title={company.name}>
                  <strong>Signed Up:</strong> {company.signed_up}
                </Card>
              </div>
            ))}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (_context) => {
  const {
    data: { data: personData },
  } = await axios.get<{ data: Person[] }>(API_URL, {
    params: {
      tabId: "person",
    },
  });

  const {
    data: { data: companyData },
  } = await axios.get<{ data: Company[] }>(API_URL, {
    params: {
      tabId: "company",
    },
  });

  return {
    props: {
      personData,
      companyData,
    },
  };
};

export default KanbanPage;