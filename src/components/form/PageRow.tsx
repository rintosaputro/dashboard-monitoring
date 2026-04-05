import generatePageSizes from "../../utils/generatePageSizes";
import { usePageRowContext } from "../../app/PageRowContext";

interface PageRowProps {
  dataLength: number;
}

const PageRow = ({ dataLength }: PageRowProps) => {
  const { pageRow, setPageRow } = usePageRowContext();

  const pageSizes = generatePageSizes(dataLength);

  return (
    <select
      value={pageRow}
      onChange={(e) => setPageRow(Number(e.target.value))}
      className="px-2 py-1 border border-gray-300 shadow-sm rounded-md"
    >
      {pageSizes.map((size) => (
        <option key={size} value={size}>
          Show {size} rows
        </option>
      ))}
    </select>
  );
};

export default PageRow;
