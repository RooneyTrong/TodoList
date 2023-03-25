import React from "react";
import { Form, Input, Card, Button } from "antd";

import Update from "./update";

function TodoList(props) {
  const { todoList, handleCreateTodo, handleUpdateTodo, handleDeleteTodo } =
    props;

  const renderTodoList = () => {
    return todoList.map((item, index) => {
      return (
        <Update
          key={item.id}
          id={item.id}
          title={item.title}
          content={item.content}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      );
    });
  };

  return (
    <div
      style={{
        width: "35%",
      }}
    >
      <Card>
        <Form
          name="createTodoList"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          onFinish={(values) => handleCreateTodo(values)}
        >
          <Form.Item
            label="Title"
            layout="vertical"
            name="title"
            validateFirst
            rules={[
              {
                required: true,
                message: "Bạn cần nhập tiêu đề",
              },
              {
                pattern: /^[A-Z]+[A-Za-z0-9_-]*$/,
                message: "Chữ cái đầu tiên phải viết hoa",
              },
              {
                min: 3,
                message: "Bạn cần nhập ít nhất 3 ký tự",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Content"
            layout="vertical"
            name="content"
            rules={[
              {
                required: true,
                message: "Bạn cần nhập nội dung",
              },
              {
                max: 20,
                message: "Không được nhập quá 20 ký tự",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Button
              whileTap={{ scale: 1.2 }}
              type="primary"
              htmlType="submit"
              block
            >
              Add
            </Button>
          </Form.Item>
        </Form>
      </Card>
      {renderTodoList()}
    </div>
  );
}

export default TodoList;
