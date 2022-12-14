import Task from "./Task";

export default interface Category
{
    id: number;
    name: string;
    tasksCount: number;
    headerColor: string;
    tasks: Task[];
}