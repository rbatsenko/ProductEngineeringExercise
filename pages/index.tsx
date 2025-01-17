import { FunctionComponent, useState } from "react";
import { GetStaticProps } from "next";
import { Layout, Menu, MenuProps, Typography } from "antd";
import Head from "next/head";
import { boards, BoardType } from "@lib/constants";
import { Board } from "@components/Board/Board";
import { CompanyItem, PersonItem } from "@models/ui";
import { getCompanyData } from "@lib/company";
import { getPersonData, transformPersonDataResponse } from "@lib/person";
import { fetchCompanies, fetchPersons } from "@lib/api";
import { menuItems } from "@lib/menu";
import styles from "@styles/index.module.css";

type BoardsData = { [key in BoardType]: Array<CompanyItem | PersonItem> };
type KanbanPageProps = { boardsData: BoardsData };

const { Sider, Content } = Layout;
const { Title } = Typography;

const KanbanPage: FunctionComponent<KanbanPageProps> = ({ boardsData }) => {
  const [activeBoard, setActiveBoard] = useState<BoardType>(BoardType.Company);

  const onItemClick: MenuProps["onClick"] = (e) => {
    setActiveBoard(e.key as BoardType);
  };

  return (
    <>
      <Head>
        <title>Kanban Board</title>
      </Head>
      <Layout hasSider>
        <Sider>
          <h1 className={styles.menuTitle}>Kanban Board</h1>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["company"]}
            selectedKeys={[activeBoard]}
            items={menuItems}
            onClick={onItemClick}
          />
        </Sider>
        <Layout>
          <Content>
            <Title className={styles.boardTitle}>
              {boards[activeBoard].label}
            </Title>
            <div className={styles.wrapper}>
              <div className="site-card-wrapper">
                <Board
                  activeBoard={activeBoard}
                  data={boardsData[activeBoard]}
                />
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (_context) => {
  const persons = await fetchPersons();
  const personData = getPersonData(transformPersonDataResponse(persons));

  const companies = await fetchCompanies();
  const companyData = getCompanyData(companies, personData);

  const boardsData: BoardsData = {
    company: companyData,
    people: personData,
  };

  return {
    props: {
      boardsData,
    },
  };
};

export default KanbanPage;
