import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import WorkoutForm from "../components/WorkoutForm";
import AddWorkoutButton from "../components/AddWorkoutButton";
import Home from '../pages/Home';
import Workouts from "../pages/Workouts";
import Exercises from "../pages/Exercises";
import Exercise from "../pages/Exercise";

const MainLayoutRoutes = ({ showForm, setShowForm }) => {
    return (
        <>
            <Navbar showForm={showForm} setShowForm={setShowForm} />

            {showForm && <WorkoutForm setShowForm={setShowForm} />}
            
            <AddWorkoutButton showForm={showForm} setShowForm={setShowForm}/>
            
            <Routes>
                <Route path="/" element={<Home setShowForm={setShowForm} />} />
                <Route path="/workouts" element={<Workouts setShowForm={setShowForm} />} />
                <Route path="/exercises" element={<Exercises />} />
                <Route path="/exercises/:id" element={<Exercise />} />
            </Routes>
        </>
    );
}

export default MainLayoutRoutes;