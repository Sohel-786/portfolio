function Li({ title }) {
  return (
    <li className="text-lg relative font-bold pb-1 cursor-pointer text-gray-500 before:absolute before:h-1 before:w-0 before:bottom-0 before:bg-slate-500 hover:before:w-full focus:before:w-full hover:before:transition-[width] hover:before:duration-300 before:ease-in before:duration-300 before:rounded-sm">
      {title}
    </li>
  );
}

export default Li;
