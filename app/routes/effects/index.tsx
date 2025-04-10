import React from "react";
import { redirect } from "react-router";

const testEffects = () => {
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    setVal(val + 1);
    console.log("Effect triggered");
    console.log(`val`);
    console.log(val);
  }, [val]);
};

export async function clientLoader() {
  return redirect("/");
}

export function HydrateFallback() {
  return <div>Loading...</div>;
}

export default function Effects() {
  testEffects();
  return (
    <div>
      <h1>Effects Route</h1>
    </div>
  );
}
