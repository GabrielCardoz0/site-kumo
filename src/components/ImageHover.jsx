import { classNames } from "../utils";

export default function ImageHover({ url, className, ...rest }) {
  return (
    <div {...rest} className={classNames(className, "w-[300px] h-[300px] overflow-hidden hover:opacity-95 relative group")}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-500 opacity-35 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-45 z-10"></div>
      <div
        className="w-full h-full transform transition-transform duration-300 group-hover:scale-110"
        style={{
          backgroundImage: `url(${url})`,
          backgroundSize: 'cover'
        }}
      ></div>
    </div>
  );
} 