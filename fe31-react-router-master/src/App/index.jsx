import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
import { ThemeProvider } from "styled-components";

import "../App.css";
import AdminLayout from "../layouts/AdminLayout";
import UserLayout from "../layouts/UserLayout";
import LoginLayout from "../layouts/LoginLayout";

import DashboardPage from "../pages/admin/Dashboard";
import TodoListPage from "../pages/admin/todolist";

import HomePage from "../pages/user/Home";
import AboutPage from "../pages/user/About";
import ProductDetailPage from "../pages/user/ProductDetail";

import LoginPage from "../pages/Login";

import { ROUTES } from "../constants/routes";

import { toast } from "react-toastify";

import { light, dark } from "../themes";
import { v4 as uuidv4 } from "uuid";
import * as S from "./styles";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [theme, setTheme] = useState("light");

  const handleCreateTodo = (values) => {
    const newTodo = {
      ...values,
      id: uuidv4(),
    };
    const newTodoList = [newTodo, ...todoList];
    setTodoList(newTodoList);
    toast.success("Added Successfully");
  };

  const handleUpdateTodo = (values, id) => {
    const newTodoList = [...todoList];
    const newTodo = {
      ...values,
      id: id,
    };
    const index = todoList.findIndex((item) => item.id === id);
    newTodoList.splice(index, 1, newTodo);
    setTodoList(newTodoList);
    toast.success("Updated successfully");
  };

  const handleDeleteTodo = (id) => {
    const newTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(newTodoList);
    toast.success("Delete successfully");
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#fa541c",
        },
      }}
    >
      <ThemeProvider theme={theme === "light" ? light : dark}>
        <Routes>
          <Route element={<AdminLayout />}>
            <Route path={ROUTES.ADMIN.DASHBOARD} element={<DashboardPage />} />
            <Route
              path={ROUTES.ADMIN.TODOLIST}
              element={
                <TodoListPage
                  todoList={todoList}
                  handleCreateTodo={handleCreateTodo}
                  handleUpdateTodo={handleUpdateTodo}
                  handleDeleteTodo={handleDeleteTodo}
                />
              }
            />
          </Route>
          <Route element={<UserLayout />}>
            <Route path={ROUTES.USER.HOME} element={<HomePage />} />
            <Route path={ROUTES.USER.ABOUT} element={<AboutPage />} />
            <Route
              path={ROUTES.USER.PRODUCT_DETAIL}
              element={<ProductDetailPage />}
            />
          </Route>
          <Route element={<LoginLayout />}>
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </ConfigProvider>
  );
}

export default App;
