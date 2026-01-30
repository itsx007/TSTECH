// src/components/product/SpecTable.tsx
import { ProductModel } from "@/types/product";

export function SpecTable({ model }: { model: ProductModel }) {
  return (
    <table>
      <tbody>
        {Object.entries(model.specifications).map(([key, value]) => (
          <tr key={key}>
            <th>{key}</th>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
