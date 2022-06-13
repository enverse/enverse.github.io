import { h, Fragment } from 'preact';
import { useState, useCallback } from 'preact/hooks';
import Loader from '../../Loader';

import Notification, { Props as NotificationProps } from '../../Notification';
import TextField from '../../TextField';

import './index.scss';

type FormValues = {
  name?: string;
  email?: string;
  message?: string;
  referral?: string;
  shouldSignup?: boolean;
};

const { PUBLIC_FORMSPREE_KEY_CONTACT } = import.meta.env;
const FORMSPREE_URL = 'https://formspree.io/f';

export default () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    message: '',
    referral: '',
    shouldSignup: false
  });
  const [loading, setLoading] = useState<boolean>(false);

  const [notificationProps, setNotificationProps] = useState<Pick<NotificationProps, 'message' | 'open'>>();

  const handleInputChange = useCallback(
    (value, fieldName: keyof FormValues) => {
      setFormValues({
        ...formValues,
        [fieldName]: value
      });
    },
    [formValues, setFormValues]
  );

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      setLoading(true);
      try {
        const formspreeResponse = await fetch(`${FORMSPREE_URL}/${PUBLIC_FORMSPREE_KEY_CONTACT}`, {
          method: 'POST',
          body: JSON.stringify(formValues),
          headers: {
            Accept: 'application/json'
          }
        });

        if (formspreeResponse) {
          setFormValues({
            name: '',
            email: '',
            message: '',
            referral: ''
          });
          setLoading(false);
          setNotificationProps({
            message: `Succes ! We'll get back to you soon :-)`,
            open: true
          });
        }
        // }
      } catch (e) {
        setLoading(false);
        console.error(e);
      }
    },
    [formValues, setFormValues]
  );

  const { name, email, message, referral } = formValues;

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          value={name}
          onChange={(val) => handleInputChange(val, 'name')}
          type="text"
          label="Name"
          autoComplete="name"
        />
        <TextField
          name="email"
          value={email}
          onChange={(val) => handleInputChange(val, 'email')}
          type="text"
          label="Email"
          required
          autoComplete="email"
        />
        <TextField
          name="message"
          value={message}
          onChange={(val) => handleInputChange(val, 'message')}
          type="textarea"
          label="Message"
        />
        <TextField
          name="referral"
          value={referral}
          onChange={(val) => handleInputChange(val, 'referral')}
          type="text"
          label="How did you hear about us ?"
        />

        <button class="contact-form__submit-button" type="submit" name="submit" disabled={loading}>
          Submit
        </button>
      </form>
      {loading && <Loader fullScreen />}
      <Notification onClose={() => setNotificationProps({ open: false, message: '' })} {...notificationProps} />
    </Fragment>
  );
};
