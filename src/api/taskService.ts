import axios from 'axios';

// Make sure this URL matches your backend (Task 1) server
const API_URL = 'http://localhost:8080/tasks';


export const getTasks = () => axios.get(API_URL);
export const createTask = (data: any) => axios.put(API_URL, data);
export const deleteTask = (id: string) => axios.delete(`${API_URL}/${id}`);
export const runCommand = (id: string) => axios.put(`${API_URL}/${id}/execute`);
export const searchTasks = (name: string) => axios.get(`${API_URL}?name=${name}`);
