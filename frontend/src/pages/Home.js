import { useEffect, useState } from 'react'

const Home = () => {

    //to begin with the state is going to be null
    // if the response (line 21) is okay then we will update
    // workouts using setWorkouts the VALUE is going to be what we get back from the array of data (const json = await resposne.json) 
    const [workouts, setWorkouts] = useState(null)

    //fetch data from db 
    // fetch all workouts and display here
    // useeffect will fire when home component is rendered.

    useEffect(() => {

        const fetchWorkouts = async () => {

            // we put in a proxy on package.json that way we don't have cors error further.
            // removes cross origin request error.  ONLY works during development. for production:
            // need to make sure every request points to correct endpoints.
            const response = await fetch('/')
            // why is it going to be any array of workouts?
            //if you go to server file go to CONTROLLER folder > workoutController.js file 
            // go getWorkouts where we await response back from database those are an array of documents from database
            // they are sent back as json -> and passed in to the response.json which is held in variable json and becomes
            // an array of objects where each object represents a workout
            const json = await response.json()

            // we only want to run the if logic if response is okay
            //
            if (response.ok) {
                setWorkouts(json)
            }
        }
        fetchWorkouts()
        // we only want this useeffect to fire once and by passing another parameter-- the empty array that ensures we only fire once.
    }, [])


    return (
        <div className="home">
            {/* down here we can cycle thru the workouts */}
            <div className="workouts">
                {/*we are doing () in the map function after the arrow because we are returning a TEMPLATE  */}
                {/* if only if we have a value for workouts then we will start to map thru them and if it is null then it will never run*/}
                {workouts && workouts.map((workout) => (
                    <p key={workout._id}>{workout.title}</p>
                ))}
                {/*this does not run until the backend server is up and running as well the front.*/}
            </div>
        </div>
    )
}

export default Home