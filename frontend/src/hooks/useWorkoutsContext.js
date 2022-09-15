import { WorkoutsContext } from "../context/WorkoutContext";

import { useContext } from "react";

export const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext)

    return context
}