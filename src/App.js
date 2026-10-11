import { useState, useRef, useEffect } from "react";
import "./App.css";
import TaskItem from "./components/TaskItem";

const App = () => {
    const mounted = useRef(false);

    useEffect(() => {
        if (mounted.current === false) {
            mounted.current = true;
        } else {
            console.log("Component was updated!");
        }
    });

    const [tasks, setTasks] = useState([
        { id: 1, title: "Task 1", completed: false },
        { id: 2, title: "Task 2", completed: true },
        { id: 3, title: "Task 3", completed: false },
    ]);

    const handleCleanTask = () => {
        setTasks([]);
    };
    return (
        <>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
            <button onClick={handleCleanTask}>Limpar tarefas</button>
        </>
    );
};

export default App;

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleStateChange = this.handleStateChange.bind(this);
//         this.state = {
//             tasks: [
//                 { id: 1, title: "Task 1", completed: false },
//                 { id: 2, title: "Task 2", completed: true },
//                 { id: 3, title: "Task 3", completed: false },
//             ],
//         };
//     }

//     componentDidUpdate(prevProps, prevState) {
//         console.log(prevState);
//         console.log("Component was updated!");
//     }

//     handleStateChange() {
//         this.setState({
//             task: [],
//         });
//     }

//     render() {
//         return (
//             <>
//                 {this.state.tasks.map((task) => (
//                     <TaskItem key={task.id} task={task} />
//                 ))}
//                 <button onClick={this.handleStateChange}>
//                     Limpar tarefas{console.log("teste")}
//                 </button>
//             </>
//         );
//     }
// }

// export default App;
