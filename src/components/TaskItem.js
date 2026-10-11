import { useEffect } from "react";

const TaskItem = ({ task }) => {
    useEffect(() => {
        console.log("Component was mounted");

        return () => {
            console.log("i Will unmount!");
        };
    }, []);
    return (
        <>
            <h1>{task.title}</h1>
            <p>{task.completed ? "Completo" : "Não completa"}</p>
        </>
    );
};

export default TaskItem;

// import React from "react";

// class TaskItem extends React.Component {
//     componentDidMout() {
//         console.log("Component was mounted");
//     }

//     componentWillUnmount() {
//         console.log("i Will unmount!");
//     }

//     render() {
//         const { task } = this.props;

//         return (
//             <>
//                 <h1>{task.title}</h1>
//                 <p>{task.completed ? "Completo" : "Não completa"}</p>
//             </>
//         );
//     }
// }

// export default TaskItem;
