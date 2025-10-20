import React, { useEffect, useState } from 'react';
import { Card, Input, message, Space, Spin } from 'antd';
import { SearchOutlined, ReloadOutlined } from '@ant-design/icons';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { getTasks, searchTasks } from '../api/taskService';

const Dashboard: React.FC = () => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');

  const loadTasks = async () => {
    try {
      setLoading(true);
      const response = await getTasks();
      setTasks(response.data);
    } catch {
      message.error('Failed to fetch tasks');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleSearch = async () => {
    if (!searchText.trim()) {
      loadTasks();
      return;
    }
    try {
      setLoading(true);
      const response = await searchTasks(searchText);
      setTasks(response.data);
    } catch {
      message.warning('No tasks found');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Space direction="vertical" size="large" style={{ width: '100%', marginTop: 20 }}>
      <Card title="Create a New Task" bordered={false}>
        <TaskForm />
      </Card>

      <Card title="Search Tasks" bordered={false}>
        <Space>
          <Input
            placeholder="Enter task name..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            prefix={<SearchOutlined />}
            style={{ width: 300 }}
            allowClear
          />
          <ReloadOutlined onClick={loadTasks} style={{ fontSize: 20, cursor: 'pointer' }} />
        </Space>
      </Card>

      <Card title="All Tasks" bordered={false}>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <Spin size="large" />
          </div>
        ) : (
          <TaskList tasks={tasks} reload={loadTasks} />
        )}
      </Card>
    </Space>
  );
};

export default Dashboard;
