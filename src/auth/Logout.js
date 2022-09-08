import { useEffect } from "react";
import { Navigate } from "react-router-dom";

/** Logout component.
 *
 * Effects:
 * - invokes logout function upon mount, navigates back to homepage
 */
function Logout({ logout }) {
  useEffect(function () {
    logout();
  });

  return (
    <Navigate to="/" />
  );
}

export default Logout;