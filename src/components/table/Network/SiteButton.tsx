import { FaLongArrowAltUp, FaLongArrowAltDown } from "react-icons/fa";
import { useSortContext } from "../../../app/SortContext";
import { cn } from "../../../utils/classname";

const SiteButton = () => {
  const { sort, setSort } = useSortContext();

  const handleClick = () => {
    if (sort === "asc") {
      setSort("desc");
    } else {
      setSort("asc");
    }
  };

  return (
    <button
      title="Sort by Site"
      onClick={handleClick}
      className="flex items-center gap-3 hover:opacity-10 cursor-pointer"
    >
      span{" "}
      <span className="flex">
        <FaLongArrowAltUp className={cn(sort === "asc" ? "text-danger" : "")} />
        <FaLongArrowAltDown
          className={cn(sort === "desc" ? "text-danger" : "")}
        />
      </span>
    </button>
  );
};

export default SiteButton;
