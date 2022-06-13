import { h } from 'preact';
import Loader from '../Loader';
import './index.scss';

type Props = {
  name: string;
  type: 'submit' | 'button';
  loading?: boolean;
  label: string;
  fullWidth?: boolean;
  as?: 'button' | 'a';
  href?: string;
  inverted?: boolean;
  onClick?: (val) => void;
};

export default ({ name, loading, type, label, fullWidth, as, href, inverted, onClick }: Props) => {
  const Element = ({ children, ...props }) =>
    as === 'a' ? (
      <a href={href} {...props}>
        {children}
      </a>
    ) : (
      <button {...props}>{children}</button>
    );
  return (
    <Element
      class={`contact-form__submit-button ${fullWidth ? `contact-form__submit-button--full-width` : ''} ${
        inverted ? `contact-form__submit-button--inverted` : ''
      }`}
      type={name}
      name={type}
      disabled={loading}
      onClick={onClick}
    >
      {loading ? <Loader /> : label}
    </Element>
  );
};
