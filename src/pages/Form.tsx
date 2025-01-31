import { Link } from "react-router";

export default function Form () {
  return (
    <div className="max-w-2xl mx-auto">
      <form>
        <input className="border rounded-md" type="text" />
        <input className="bg-blue-500 rounded-md px-4 text-white" type="button" value="Submit" />
      </form>
      <Link className="link" to="/">Go to Home</Link>
    </div>
  )
}
