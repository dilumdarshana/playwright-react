import { Link } from 'react-router';

export default function Home () {
  return (
    <div className="max-w-2xl">
      <div className="container flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Home</h1>
        <Link className="text-blue-600 hover:text-blue-800" to="/form">Go to Form</Link>
      </div>
      <p className="text-gray-700 pt-5">This is the default home page.</p>
    </div>
  )
}
