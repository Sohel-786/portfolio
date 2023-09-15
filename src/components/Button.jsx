function Button({ live, git }) {
  return (
    <div className="flex gap-6 pl-7">
      <a href={live}>
        <button className="border-2 border-blue-400 py-3 px-4 font-bold text-sm" style={{
            backgroundColor : 'var(--card-bg-right)',
        }}>
          See This Live
        </button>
      </a>
      <a href={git}>
        <button>View Code</button>
      </a>
    </div>
  );
}

export default Button;
