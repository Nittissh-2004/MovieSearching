import React from 'react';

const ErrorMessage = ({ message }) => (
  <div className="bg-red-100 text-red-700 p-3 rounded mt-4">
    {message}
  </div>
);

export default ErrorMessage;