import React from "react";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import styled from "styled-components";
import { AppRoutes } from "./AppRoutes";

const Layout = styled.div`
  display: flex;
  overflow: hidden;
  height: calc(100vh - 53px);
`;

const Content = styled.main`
  flex: 1;
  padding: 1rem;
  // height: calc(100vh - 50px);
  // overflow: hidden;
  background-color: #f7f2f2;
`;

export const Main = () => {
  // this component is responsible for wrapping header, sidebar and layout
  return (
    <div>
      <Header />
      <Layout>
        <Sidebar />
        <Content>
          <AppRoutes />
        </Content>
      </Layout>
    </div>
  );
};
