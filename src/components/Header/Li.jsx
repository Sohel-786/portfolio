function Li({ title }) {
  return (
    <li className="text-lg text-blue-400 relative font-bold pb-1 cursor-pointer before:absolute before:h-1 before:w-0 before:bottom-0 before:bg-sky-400 hover:before:w-full focus:before:w-full hover:before:duration-300 before:ease-in before:duration-300 before:rounded-sm" >
      {title}
    </li>
  );
}

export default Li;
