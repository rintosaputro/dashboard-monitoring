import type { FC } from "react";
import { cn } from "../../utils/classname";

interface Props {
  color: string;
  title: string;
}

const BadgePie: FC<Props> = ({ color, title }) => {
  return (
    <div className="text-sm flex items-center gap-2">
      <div className={cn("w-4 h-4 rounded-sm")} style={{ background: color }} />{" "}
      {title}
    </div>
  );
};

export default BadgePie;
