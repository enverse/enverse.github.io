import { h } from 'preact';
import { useCallback, useState } from 'preact/hooks';
import Button from '../../Button';
import TextField from '../../TextField';

import './index.scss';

const { PUBLIC_CONNECT_SENDINBLUE_URL } = import.meta.env;
const FORWARD_USER_ENDPOINT = 'forwardContact';

export default () => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async (e: h.JSX.TargetedEvent<HTMLFormElement, Event>) => {
      e.preventDefault();
      try {
        setLoading(true);
        const res = await fetch(`${PUBLIC_CONNECT_SENDINBLUE_URL}/${FORWARD_USER_ENDPOINT}`, {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (res) {
          setLoading(false);
          // window.location.href = '/cto/thank-you';
        }
      } catch (e) {
        setLoading(false);
        // window.location.href = '/cto/thank-you';
        console.error(e);
      }
    },
    [values]
  );
  return (
    <form class="optin-form__container" onSubmit={handleSubmit}>
      <TextField
        autoComplete="given-name"
        label="First Name"
        type="text"
        name="firstname"
        onChange={(val) => setValues({ ...values, firstName: val })}
        value={values.firstName}
      />
      <TextField
        autoComplete="family-name"
        label="Last Name"
        type="text"
        name="lastname"
        onChange={(val) => setValues({ ...values, lastName: val })}
        value={values.lastName}
      />
      <TextField
        required
        autoComplete="email"
        label="Email"
        type="email"
        name="email"
        onChange={(val) => setValues({ ...values, email: val })}
        value={values.email}
      />
      <div>
        <Button inverted fullWidth type="submit" name="submit" label="Watch the video NOW !" loading={loading} />
      </div>
    </form>
  );
};
