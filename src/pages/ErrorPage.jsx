import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="page-container error-page" data-testid="error-page">
      <h1>404 Page Not Found</h1>
      <Link to="/">Back to Home</Link>
    </div>
  );
}