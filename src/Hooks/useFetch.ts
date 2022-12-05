import Task from "../Interfaces/Task";
import { useEffect } from 'preact/hooks'
import FetchException from "../CustomExceptions/FetchException";

async function getResponce(tasksArr: Task[], reqUrl: string) {
    const responce = await fetch(reqUrl)
    if(!responce.ok)
    {
        throw new FetchException("Fetch error");
    }
    const data = (await responce.json())
    return tasksArr;
}

async function useFetchTodos(reqUrl: string, error: FetchException, options?: RequestInit): Promise<Task[]>
{
    const tasks: Task[] = [];
    useEffect(async (): Promise<Task[]> => (getResponce(tasks, reqUrl)), [reqUrl, options])
    return tasks
}


export default useFetchTodos