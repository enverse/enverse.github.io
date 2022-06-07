import { h } from 'preact';
import './index.scss';

type Props = {
  name: string;
  type: 'submit';
  loading?: boolean;
  label: string;
  fullWidth?: boolean;
};

export default ({ name, loading, type, label, fullWidth }: Props) => {
  return (
    <button
      class={fullWidth ? `contact-form__submit-button--full-width` : `contact-form__submit-button`}
      type={name}
      name={type}
      disabled={loading}
    >
      {label}
    </button>
  );
};
