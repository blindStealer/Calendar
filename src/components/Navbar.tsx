import React from "react";
import { Layout, Menu, Row } from "antd";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const { isAuth, user } = useTypedSelector((state) => state.auth);
  const { logout } = useActions();
  const navigate = useNavigate();

  return isAuth ? (
    <Layout.Header>
      <Row justify={"end"}>
        <div style={{ color: "white" }}>{user.username}</div>
        <Menu theme={"dark"} mode={"horizontal"} selectable={false}>
          <Menu.Item onClick={() => navigate("mainPage")}>
            Главная страница
          </Menu.Item>
          <Menu.Item onClick={() => navigate("event")}>Календарь</Menu.Item>
          <Menu.Item onClick={() => logout()}>Выйти</Menu.Item>
        </Menu>
      </Row>
    </Layout.Header>
  ) : (
    <Layout.Header>
      <Row justify={"end"}>
        <Menu theme={"dark"} mode={"vertical"} selectable={false}>
          <Menu.Item>Логин</Menu.Item>
        </Menu>
      </Row>
    </Layout.Header>
  );
};
