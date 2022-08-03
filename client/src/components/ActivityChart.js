import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import sub from 'date-fns/sub';
import format from 'date-fns/format';
import isSameDay from 'date-fns/isSameDay'
import StyledCard from '../styles/StyledCard';

const ActivityChart = ({ workouts }) => {
    const [activityData, setActivityData] = useState(null);

    // Return array of Objects containing dates of the last 7 days
    const getLastSevenDays = () => {
        const today = Date.now();
        const days = [];
        const LIMIT = 6;
        
        for (let i = 0; i < LIMIT; i++) {
            days.push({date: sub(today, { days: LIMIT - i })});
        }
        days.push({date: today});
        
        return days;
    }

    useEffect(() => {
        const getWorkoutDurations = () => {
            const days = getLastSevenDays();

            return days.map((dateObj) => {
                // Get the total duration of workouts for each date
                const duration = workouts.reduce((a, b) => {
                    return (isSameDay(new Date(b.createdAt), dateObj.date)) ? a + b.duration : a + 0;
                }, 0);
                
                // Add active minutes to the object to display on the bar chart
                return { date: format(dateObj.date, 'MM-dd'), "Active Minutes": duration};
            })
        }
        
        if (workouts) {
            const workoutDurations = getWorkoutDurations();
            setActivityData(workoutDurations);
        }
    }, [workouts])

    return (
        <StyledCard>
            {activityData && (
                <ResponsiveContainer width={'100%'} height={300}>
                    <BarChart
                        data={activityData}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <Tooltip />
                        <Bar dataKey="Active Minutes" fill="#000" />
                    </BarChart>
                </ResponsiveContainer>
            )}
        </StyledCard>
    );
}

export default ActivityChart;