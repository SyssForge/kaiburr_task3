import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { createTask } from '../api/taskService';

/**
 * TaskForm Component
 * -------------------------------
 * Handles task creation (id, name, owner, command).
 * On submit, it calls the backend API to create a new task.
 */
const TaskForm: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    try {
      await createTask(values);
      message.success('✅ Task created successfully!');
      form.resetFields();
    } catch (error) {
      message.error('❌ Failed to create task');
    }
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      style={{ maxWidth: 600, marginTop: 10 }}
    >
      <Form.Item
        label="Task ID"
        name="id"
        rules={[{ required: true, message: 'Please enter Task ID' }]}
      >
        <Input placeholder="Example: 101" />
      </Form.Item>

      <Form.Item
        label="Task Name"
        name="name"
        rules={[{ required: true, message: 'Please enter Task Name' }]}
      >
        <Input placeholder="Example: Print Hello" />
      </Form.Item>

      <Form.Item
        label="Owner"
        name="owner"
        rules={[{ required: true, message: 'Please enter Owner name' }]}
      >
        <Input placeholder="Example: Sarayu" />
      </Form.Item>

      <Form.Item
        label="Command"
        name="command"
        rules={[{ required: true, message: 'Please enter command' }]}
      >
        <Input placeholder='Example: echo "Hello World"' />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Create Task
      </Button>
    </Form>
  );
};

export default TaskForm;
