import { NavLink } from 'react-router-dom';

type Props = {
  image: string;
  url: string;
  alt: string;
  className: string;
  text: string;
};

function MenuIcon({ image, url, alt, className, text }: Props) {
  return (
    <li className={className}>
      <NavLink to={url}>
        <img src={image} alt={alt} />
        <span>{text}</span>
      </NavLink>
    </li>
  );
}

export default MenuIcon;
