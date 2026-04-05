import { LuSearch } from "react-icons/lu";

const SearchInput = ({
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <label
      htmlFor="search"
      className="text-sm font-medium text-gray-700 flex items-center relative"
    >
      <LuSearch className="inline-block mr-2 absolute left-3 text-lg" />
      <input
        type="text"
        id="search"
        name="search"
        className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm pl-10 py-4"
        {...props}
      />
    </label>
  );
};

export default SearchInput;
