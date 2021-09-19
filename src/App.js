
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {

  const [showAddTask,setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
        id:"1",
        text:"Doctor's appointment",
        day:"Nov 7th at 3pm",
        reminder: "true"
    },
    {
        id:"2",
        text:"Pastor's appointment",
        day:"Dec 7th at 10am",
        reminder: "true"
    },
    {
        
        id:"3",
        text:"Meeting's appointment",
        day:"Aug 19th at 5pm",
        reminder: "false"
    },
])

//Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random()*1000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

//Delete a task
const deleteTask = (id) => {
  setTasks (tasks.filter((task) => task.id !== id));
}

//Reminder
const toggleReminder = (id)  => {
  setTasks (tasks.map((task) => task.id === id ? {...task, reminder :
  !task.reminder} : task
  )
  )
}
  return (
    <div className="container" >
      <Header title="Test Tracker" onAdd={() => 
        setShowAddTask(!showAddTask)}
        showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {
      tasks.length > 0 ?(
      <Tasks tasks={tasks} 
      onDelete={deleteTask}
      onToggle={toggleReminder}/>
      )
      :(
        'Nothing to show'
      )}
    </div>
  );
}

export default App;
