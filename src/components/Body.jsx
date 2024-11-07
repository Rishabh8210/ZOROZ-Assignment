import React from 'react'; // Importing React to use JSX
import { Outlet } from 'react-router-dom'; // Importing Outlet to render nested routes

const Body = () => {
  return (
    // Container div for the body section of the app
    <div className='min-h-screen w-screen bg-bgColor'>
        {/* Outlet renders the matching child route components here */}
        <Outlet />
    </div>
  );
}

export default Body;
