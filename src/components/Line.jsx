import { classNames } from "../utils";

export default function Line({ className }) {
  return (
    <div className={classNames(className, "h-0.5 w-[100px] bg-orange-500")}></div>
  );
  
};
