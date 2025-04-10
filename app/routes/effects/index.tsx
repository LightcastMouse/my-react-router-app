import { useEffect } from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import type { Route } from "./+types/index";

const testEffects = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    console.log(`navigate`);
    console.log(navigate);
    console.log(`location`);
    console.log(location);
    navigate("/", { replace: true, state: { from: location } });
  }, [navigate, location]);
};

// import { z } from "zod";

// const SomeSchema = z.object({
//   propertyA: z.string().min(1, "propertyA is missing"),
//   proptertyB: z.string().min(1, "proptertyB is missing"),
// });

// export type SomeType = z.infer<typeof SomeSchema>;

export async function loader({ request }: Route.LoaderArgs) {
  // const blah = testEffects();
  // const response = await fetch(``);
  // const data = await response.json();

  // const result = SomeSchema.safeParse(data);

  // if (!result.success || !result.data || result.error) {
  //   throw Error("Failed to get data", result.error);
  // }

  return { message: "asdf" };
}

export default function Effects({ loaderData }: Route.ComponentProps) {
  testEffects();
  return (
    <div>
      <h1>Effects Route</h1>
    </div>
  );
}
