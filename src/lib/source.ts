import { docs } from "@/.source";
import { loader } from "fumadocs-core/source";

export const source = loader({
  baseUrl: "src/docs",
  source: docs.toFumadocsSource(),
});
