import React from 'react';
import { List, Typography } from 'antd';

interface Props {
  executions: { startTime: string; endTime: string; output: string }[];
}

const TaskExecutions: React.FC<Props> = ({ executions }) => (
  <List
    bordered
    dataSource={executions}
    renderItem={(exec) => (
      <List.Item>
        <Typography.Text>[{exec.startTime} → {exec.endTime}]</Typography.Text>
        <div>{exec.output}</div>
      </List.Item>
    )}
  />
);

export default TaskExecutions;
