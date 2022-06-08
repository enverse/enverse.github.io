import { Fragment, h } from 'preact';
import { useCallback, useState } from 'preact/hooks';
import './index.scss';

type Props = {
  name: string;
  onChange: (val) => void;
  label: string;
  type: 'text' | 'textarea' | 'email';
  value: string;
  required?: boolean;
  autoComplete?: string;
};

// TODO fix onChange
type ElementProps = Omit<Props, 'label' | 'onChange'> & {
  onFocus: () => void;
  onBlur: () => void;
  onInput: (val) => void;
};

const InputElement = ({ type, name, ...props }: ElementProps) =>
  type === 'textarea' ? (
    <textarea id={name} class="form-field__textarea" {...props}></textarea>
  ) : (
    <input id={name} type={type} class="form-field__input" {...props} />
  );

export default ({ label, onChange, type = 'text', value, name, required, autoComplete }: Props) => {
  const [isFocused, setFocus] = useState(false);

  const handleInputChange = useCallback(
    (e: h.JSX.TargetedEvent<HTMLInputElement, Event>) => {
      //   https://github.com/preactjs/preact/issues/193
      const target = e.target as HTMLInputElement;
      onChange(target.value);
    },
    [onChange]
  );
  return (
    <Fragment>
      <div class={`form-field ${value || isFocused ? 'form-field--is-active' : ''}`}>
        <div class="form-field__control">
          <label for={name} class="form-field__label">
            {label}
          </label>
          <InputElement
            type={type}
            onInput={handleInputChange}
            value={value}
            name={name}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            required={required}
            autoComplete={autoComplete}
          />
        </div>
      </div>
    </Fragment>
  );
};
