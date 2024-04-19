import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "bei5w8iq",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-04-18",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

// for localhost cors
// sanity cors add http://localhost:8081

export default client;
