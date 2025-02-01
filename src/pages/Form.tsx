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
    <div className="max-w-2xl mx-auto">
      <p>Form</p>
      <form>
        <input ref={inputRef} className="border rounded-md" type="text" />
        <input className="bg-blue-500 rounded-md px-4 text-white" onClick={handleClick} type="button" value="Submit" />
      </form>
      <Link className="link" to="/">Go to Home</Link>
      <ul>
        {comments.map(comment => (
          <li key={comment}>{comment}</li>
        ))}
      </ul>
    </div>
  )
}
