import Example from "@/api/example";

export default (context, inject) => {
  // Initialize API factories
  const factories = {
    example: Example(context.$axios),
  };

  // Inject $api
  inject("api", factories);
};
