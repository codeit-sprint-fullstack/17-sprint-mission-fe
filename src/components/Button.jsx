import { Link } from 'react-router';

export default function Button({
  href,
  type = 'button',
  className = '',
  size,
  children,
  ...rest
}) {
  const classes = `btn ${size ? `btn-${size}` : ''} ${className}`;

  if (href) {
    return (
      <Link to={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type={type} {...rest}>
      {children}
    </button>
  );
}
