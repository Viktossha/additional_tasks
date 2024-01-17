import React from 'react';

type TasksType = {
    taskId: number,
    title: string,
    isDone: boolean
}

type DataType = {
    title: string,
    tasks: Array<TasksType>,
    students: Array<string>
}

type TasksPropsType = {
    data: DataType
}
export function Tasks (props: TasksPropsType) {
    return (
        <div>
            <h2>{props.data.title}</h2>
            <ul>
                {props.data.tasks.map(t => <li>{t.title}</li>)}
            </ul>

            <ul>
                {props.data.students.map(s => <li>{s}</li>)}
            </ul>
        </div>
    );
};