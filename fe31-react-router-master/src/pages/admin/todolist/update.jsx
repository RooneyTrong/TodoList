import React, { useState } from "react";
import { Form, Input, Card, Button, Space } from "antd";

function Update(props) {
  const [isUpdate, setIsUpdate] = useState(false);

  const [updateForm] = Form.useForm();

  const { title, content, id, handleUpdateTodo, handleDeleteTodo } = props;

  const renderTodoListContent = () => {
    if (!isUpdate) {
      return (
        <>
          <h3>Title: {title}</h3>
          <h4>Content: {content}</h4>
        </>
      );
    }
    return (
      <Form
        form={updateForm}
        layout="vertical"
        initialValues={{
          title: title,
          content: content,
        }}
        onFinish={(values) => {
          handleUpdateTodo(values, id);
          setIsUpdate(false);
        }}
      >
        <Form.Item
          label="Title"
          layout="vertical"
          name="title"
          rules={[
            {
              required: true,
              message: "Bạn cần nhập tiêu đề",
            },
            {
              min: 3,
              message: "Bạn cần nhập ít nhất 3 ký tự",
            },
            {
              pattern: /^[A-Z]+[A-Za-z0-9_-]*$/,
              message: "Chữ cái đầu tiên phải viết hoa",
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
      </Form>
    );
  };

  return (
    <Card size="small" style={{ marginTop: 16 }}>
      {renderTodoListContent()}
      <Space style={{ marginTop: 8 }}>
        {isUpdate ? (
          <>
            <Button type="primary" onClick={() => updateForm.submit()}>
              Save
            </Button>
            <Button onClick={() => setIsUpdate(false)}>Cancel</Button>
          </>
        ) : (
          <Button type="primary" ghost onClick={() => setIsUpdate(true)}>
            Update
          </Button>
        )}
        <Button danger onClick={() => handleDeleteTodo(id)}>
          Delete
        </Button>
      </Space>
    </Card>
  );
}
export default Update;
