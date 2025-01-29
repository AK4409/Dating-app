export function Button({ children, onClick, variant = "default" }) {
    const variants = {
      default: "bg-blue-500 text-white px-4 py-2 rounded",
      outline: "border border-gray-300 px-4 py-2 rounded",
    };
    return <button className={variants[variant]} onClick={onClick}>{children}</button>;
  }
  