export default function Button({ children, ...rest }) {
  return <button className="bg-orange-500 rounded-sm py-2 px-6 text-white font-medium" {...rest}>{children}</button>
};
