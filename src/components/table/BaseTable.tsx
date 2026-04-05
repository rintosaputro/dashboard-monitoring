export type Column<T> = {
  key: keyof T;
  label: string;
  render?: (value: any, row: T) => React.ReactNode;
};

type Props<T> = {
  columns: Column<T>[];
  data: T[];
};

export function BaseTable<T>({ columns, data }: Props<T>) {
  return (
    <div>
      <table className="w-full text-sm ">
        <thead className="text-left text-white bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
          <tr>
            {columns.map((col) => (
              <th key={String(col.key)} className="p-3">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="">
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center h-125 font-bold"
              >
                No data available
              </td>
            </tr>
          ) : (
            data.map((row, i) => (
              <tr
                key={i}
                className="border-t border-slate-700 hover:bg-primary/10 transition"
              >
                {columns.map((col) => (
                  <td key={String(col.key)} className="p-3">
                    {col.render
                      ? col.render(row[col.key], row)
                      : (row[col.key] as any)}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
