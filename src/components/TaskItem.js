const TaskItem = ({task}) => {
    return (
        <>
         <h1>{task.title}</h1>
         <p>{task.completed ? 'Completo' : 'Não completa'}</p>
        </>
    )
}

export default TaskItem;