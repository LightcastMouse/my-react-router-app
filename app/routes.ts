import {
  type RouteConfig,
  route,
  layout,
  index,
  prefix,
} from "@react-router/dev/routes";

export default [
  ...prefix("/", [
    layout("routes/app-layout.tsx", [
      index("routes/home.tsx"),
      route("effects", "routes/effects/index.tsx"),
      layout("routes/marketing/layout.tsx", [
        index("routes/marketing/home.tsx"),
        route("contact", "routes/marketing/contact.tsx"),
      ]),
      ...prefix("projects", [
        index("routes/projects/home.tsx"),
        layout("routes/projects/project-layout.tsx", [
          route(":pid", "routes/projects/project.tsx"),
          route(":pid/edit", "routes/projects/edit-project.tsx"),
        ]),
      ]),
    ]),
  ]),
] satisfies RouteConfig;
