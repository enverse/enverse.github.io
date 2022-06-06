import { Fragment, h } from 'preact';
import { useState } from 'preact/hooks';
import './index.scss';

type Props = {
  name: string;
  onChange: (val) => void;
  label: string;
  type: 'text' | 'textarea' | 'email';
  value: string;
  required?: boolean;
};

type ElementProps = Omit<Props, 'label'> & { onFocus: () => void; onBlur: () => void };

const InputElement = ({ type, name, ...props }: ElementProps) =>
  type === 'textarea' ? (
    <textarea id={name} class="form-field__textarea" {...props}></textarea>
  ) : (
    <input id={name} type={type} autoComplete={type == 'email' ? 'on' : 'off'} class="form-field__input" {...props} />
  );

export default ({ label, onChange, type = 'text', value, name, required }: Props) => {
  const [isFocused, setFocus] = useState(false);
  return (
    <Fragment>
      <div class={`form-field ${value || isFocused ? 'form-field--is-active' : ''}`}>
        <div class="form-field__control">
          <label for={name} class="form-field__label">
            {label}
          </label>
          <InputElement
            type={type}
            onChange={onChange}
            value={value}
            name={name}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            required={required}
          />
        </div>
      </div>
    </Fragment>
  );
};
