import React from 'react';
import { Table, Button, message, Popconfirm } from 'antd';
import { deleteTask, runCommand } from '../api/taskService';

interface TaskListProps {
  tasks: any[];
  reload: () => void;
}

/**
 * TaskList Component
 * Displays and manages all tasks.
 */
const TaskList: React.FC<TaskListProps> = ({ tasks, reload }) => {
  const handleDelete = async (id: string) => {
    try {
      await deleteTask(id);
      message.success('🗑️ Task deleted successfully');
      reload();
    } catch {
      message.error('❌ Failed to delete task');
    }
  };

  const handleRun = async (id: string) => {
    try {
      await runCommand(id);
      message.success('⚙️ Command executed successfully!');
      reload();
    } catch {
      message.error('❌ Failed to execute command');
    }
  };

  const columns = [
    { title: 'Task ID', dataIndex: 'id', key: 'id' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Owner', dataIndex: 'owner', key: 'owner' },
    { title: 'Command', dataIndex: 'command', key: 'command' },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: any) => (
        <>
          <Button type="default" onClick={() => handleRun(record.id)}>
            Run
          </Button>
          <Popconfirm
            title="Are you sure you want to delete this task?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger style={{ marginLeft: 10 }}>
              Delete
            </Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  return (
    <Table
      dataSource={tasks}
      columns={columns}
      rowKey="id"
      bordered
      pagination={{ pageSize: 5 }}
      style={{ marginTop: 20 }}
    />
  );
};

export default TaskList;
