// import { z, fromZodError } from "zod";

import { Form } from "react-router";
import type { Route } from "./+types/edit-project";

// const SomeSchema = z.object({
//   propertyA: z.string().min(1, "propertyA is missing"),
//   proptertyB: z.string().min(1, "proptertyB is missing"),
// });

// export type SomeType = z.infer<typeof SomeSchema>;

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const name = formData.get("name");
  const description = formData.get("description");

  // const response = await fetch(``);
  // const data = await response.json();

  // const result = SomeSchema.safeParse(data);

  // if (!result.success || !result.data || result.error) {
  //   throw fromZodError(result.error);
  // }

  // return result.data;
}

export default function ProjectsEditProject() {
  return (
    <div>
      <h1>Projects Edit Project Route</h1>

      <Form method="post">
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Description:
          <textarea name="description" />
        </label>
        <button type="submit">Save</button>
      </Form>
    </div>
  );
}
