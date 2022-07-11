import { Card, Col, Row } from "antd";
import { FunctionComponent } from "react";
import { CompanyItem, PersonItem } from "@models/ui";
import { BoardType } from "@lib/constants";
import { isCompaniesData, isPersonsData } from "@lib/guards";
import { companyColumns, peopleColumns } from "./data";

export const Board: FunctionComponent<{
  activeBoard: BoardType;
  data: Array<CompanyItem | PersonItem>;
}> = ({ activeBoard, data }) => {
  return (
    <>
      {activeBoard === "company" && isCompaniesData(data) && (
        <Row gutter={16}>
          {companyColumns.map(({ title, predicate }) => (
            <Col span={8} key={title}>
              <h2>{title}</h2>
              {data.filter(predicate).map((company) => (
                <div key={company.id} style={{ marginBottom: "16px" }}>
                  <Card title={company.name}>
                    <p>
                      <strong>Signed Up:</strong> {company.signed_up}
                    </p>
                    <p>
                      <strong>Number of Users:</strong> {company.totalUsers}
                    </p>
                  </Card>
                </div>
              ))}
            </Col>
          ))}
        </Row>
      )}
      {activeBoard === "people" && isPersonsData(data) && (
        <Row gutter={16}>
          {peopleColumns.map(({ title, predicate }) => (
            <Col span={6} key={title}>
              <h3>{title}</h3>
              {data.filter(predicate).map((person) => (
                <div key={person.id} style={{ marginBottom: "16px" }}>
                  <Card title={person.name}>
                    <p>
                      <strong>Signed Up:</strong> {person.signed_up}
                    </p>
                    <p>
                      <strong>Last seen:</strong> {person.last_seen}
                    </p>
                  </Card>
                </div>
              ))}
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};
