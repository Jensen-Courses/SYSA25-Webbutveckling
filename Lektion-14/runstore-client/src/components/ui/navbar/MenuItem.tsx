import { NavLink } from 'react-router-dom';

type Props = {
  text: string;
  url: string;
};

function MenuItem({ text, url }: Props) {
  return (
    <li>
      <NavLink to={url}>{text}</NavLink>
    </li>
  );
}

export default MenuItem;
