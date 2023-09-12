function Icon({lable, url, element}) {
  return (
    <li className="text-blue-500 hover:text-blue-700">
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