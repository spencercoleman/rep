const WorkoutDetails = ({ workout }) => {
    return (
        <li>
            <strong>{workout.title}</strong>
            
            {workout.notes.length > 0 && <p>{workout.notes}</p>}
            
            <ul>
                {workout.exercises.map((exercise, i) => (
                    <li key={exercise._id}>
                        {exercise.name} {workout.weights[i]}lbs {workout.sets[i]} x {workout.reps[i]}
                    </li>
                ))}
            </ul>
        </li>
    )
}

export default WorkoutDetails;