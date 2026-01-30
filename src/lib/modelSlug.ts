import { ProductModel } from "@/types/product";

export const modelToSlug = (model: ProductModel) =>
  model.model
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
