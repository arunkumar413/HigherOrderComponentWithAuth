import { useState } from "react";

export function withAuth(WrappedComponent) {
  return function (props) {
    const [isLoggedIn, setLoggedIn] = useState(true);
    const [count, setCount] = useState(0);

    return isLoggedIn ? (
      <WrappedComponent count={count} setCount={setCount} />
    ) : (
      <h2> please login </h2>
    );
  };
}
