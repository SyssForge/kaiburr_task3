import axios from 'axios';

// Replace with your backend port if different
const API_URL = 'http://localhost:30080/tasks';

export const getTasks = () => axios.get(API_URL);
export const createTask = (data: any) => axios.put(API_URL, data);
export const deleteTask = (id: string) => axios.delete(`${API_URL}/${id}`);
export const runCommand = (id: string) => axios.put(`${API_URL}/${id}/execute`);
export const searchTasks = (name: string) => axios.get(`${API_URL}?name=${name}`);
