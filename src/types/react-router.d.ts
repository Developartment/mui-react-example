declare module "react-router" {
    interface RouteMatch {
        // Custom route properties
        handle: { title?: string };
    }
}
