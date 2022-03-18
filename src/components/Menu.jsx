function Menu(props) {
  return (
    <li className="inline-flex">
      {props.title}
      <svg className="ml-1 w-3 h-3 mt-1 stroke-slate-400" fill="none" viewBox="0 0 24 24">
        <path stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </li>
  );
}

export default Menu;
