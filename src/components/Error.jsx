import React from 'react'

const Error = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      {/* Error message */}
      <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Not Found</h1>
      {/* Description of the error */}
      <p className="text-xl text-gray-600 mb-8 text-center">
        Oops! The page you're looking for doesn't exist.
      </p>
      {/* Link to return to home */}
      <a href="/" className="text-lg text-blue-500 hover:underline font-semibold">
        Go back to Homepage
      </a>
    </div>
  )
}

export default Error
