import type {Task, TasksState} from '../App'
import {createTodolistAC, deleteTodolistAC} from './todolists-reducer'
import {createAction, createReducer, nanoid} from "@reduxjs/toolkit";

export const deleteTaskAC = createAction<{ todolistId: string, taskId: string }>('tasks/delete_task')
export const createTaskAC = createAction<{ todolistId: string, title: string }>('tasks/create_task')
export const changeTaskStatusAC = createAction<{
    todolistId: string,
    taskId: string,
    isDone: boolean
}>('tasks/change_task_status')
export const changeTaskTitleAC = createAction<{
    todolistId: string,
    taskId: string,
    title: string
}>('tasks/change_task_title')


const initialState: TasksState = {}


export const counterReducer = createReducer(initialState, builder => {
    builder
        .addCase(createTodolistAC, (state, action) => {
            state[action.payload.id] = []
        })
        .addCase(deleteTodolistAC, (state, action) => {
            delete state[action.payload.id]
        })
        .addCase(deleteTaskAC, (state, action) => {  // (1)
            const taskIndex = state[action.payload.todolistId].findIndex(  // (2)
                task => task.id === action.payload.taskId  // (3)
            );
            if (taskIndex !== -1) {  // (4)
                state[action.payload.todolistId].splice(taskIndex, 1);  // (5)
            }
        })
        .addCase(createTaskAC, (state, action) => {
            const newTask: Task = {id: nanoid(), title: action.payload.title, isDone: false}
            state[action.payload.todolistId].unshift(newTask)
        })
        .addCase(changeTaskStatusAC, (state, action) => {
            const task = state[action.payload.todolistId].find(task => task.id === action.payload.taskId)
            if (task) {
                task.isDone = action.payload.isDone
            }
        })
        .addCase(changeTaskTitleAC, (state, action) => {
            const task = state[action.payload.todolistId].find(task => task.id === action.payload.taskId)
            if (task) {
                task.title = action.payload.title
            }
        })
})

