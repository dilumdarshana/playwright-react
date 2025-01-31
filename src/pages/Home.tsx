import { Link } from 'react-router';

export default function Home () {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the default home page.</p>
      <Link to="/form">Go to Form</Link>
    </div>
  )
}
