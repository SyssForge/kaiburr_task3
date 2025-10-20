import React from 'react';
import { Table, Button, message, Popconfirm, Tag } from 'antd';
import { deleteTask, runCommand } from '../api/taskService';

/**
 * TaskList Component
 * -------------------------------
 * Displays all tasks and allows running/deleting a task.
 * Expands each row to show recent executions and their output.
 */
interface TaskListProps {
  tasks: any[];
  reload: () => void;
}

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
      rowKey={(record) => record.id}
      dataSource={tasks}
      columns={columns as any}
      pagination={{ pageSize: 8 }}
      expandable={{
        expandedRowRender: (record: any) => (
          <div>
            {Array.isArray(record.executions) && record.executions.length > 0 ? (
              <div>
                {record.executions.map((exec: any, idx: number) => (
                  <div key={idx} style={{ marginBottom: 8 }}>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                      <Tag color="blue">{exec.startTime}</Tag>
                      <span>→</span>
                      <Tag color={exec.endTime ? 'green' : 'orange'}>
                        {exec.endTime ?? 'running'}
                      </Tag>
                    </div>
                    <pre style={{ whiteSpace: 'pre-wrap', margin: 0 }}>{exec.output}</pre>
                  </div>
                ))}
              </div>
            ) : (
              <em>No executions yet</em>
            )}
          </div>
        ),
      }}
    />
  );
};

export default TaskList;
