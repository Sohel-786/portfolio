function Icon({lable, url, element, duration}) {
  return (
    <li data-aos='fade-up' data-aos-duration={duration} className="text-blue-500 text-2xl hover:text-blue-700 pb-2 relative before:absolute before:h-0.5 before:w-0 before:bottom-0 before:bg-blue-500 hover:before:w-full focus:before:w-full hover:before:transition-[width] hover:before:duration-300 before:ease-in before:duration-300 before:rounded-sm">
      <a
        href={url}
        aria-label={lable}
        target="_blank"
        rel="noreferrer"
      >
        {element}
      </a>
    </li>
  );
}

export default Icon;