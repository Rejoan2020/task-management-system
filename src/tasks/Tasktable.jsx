import { useState } from "react";
import Search from "./Search";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";

export default function Tasktable() {
	const task = {
		'id': crypto.randomUUID(),
		'title' : 'Integration API',
		'description' : 'Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.',
		'tags': ['Web', 'Python', 'API'],
		'priority' : ['Low', 'High', 'Medium'],
		'isFav' : true,
	}
	const [tasks, setTasks] = useState([task]);
	
	return (
		<>
			<Search/>
			<div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
				<TaskActions/>
				<TaskList tasks={tasks}/>
			</div>
		</>
	)
}