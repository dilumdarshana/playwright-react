import { useState, useRef } from 'react';
import { Link } from 'react-router';

export default function Form () {
  const [comments, setComments] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current?.value) {
      setComments([...comments, inputRef.current?.value]);
      inputRef.current.value = '';
    }
  };

  return (
    <div className="max-w-2xl">
      <div className="container flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Form</h1>
        <Link className="text-blue-600 hover:text-blue-800" to="/">Go to Home</Link>
      </div>
      <form className="space-y-6 bg-white p-6 rounded shadow-md">
        <input
          ref={inputRef}
          className="w-full px-3 py-2 border border-gray-600 rounded-md"
          type="text"
          placeholder="Enter your text"
        />
        <input
          className="w-full bg-blue-500 py-2 px-4 rounded-md text-white"
          onClick={handleClick}
          type="button"
          value="Submit"
        />
      </form>
      <ul data-testId="items-list" className="list-none pl-5 space-y-2 text-gray-700">
        {comments.map(comment => (
          <li className="border-b py-2" key={comment} data-testId="item">{comment}</li>
        ))}
      </ul>
    </div>
  )
}
