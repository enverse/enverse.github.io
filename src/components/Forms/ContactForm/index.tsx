import { h, Fragment } from 'preact';
import { useState, useCallback } from 'preact/hooks';

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

const { PUBLIC_FORMSPREE_KEY } = import.meta.env;
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
        const formspreeResponse = await fetch(`${FORMSPREE_URL}/${PUBLIC_FORMSPREE_KEY}`, {
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
      {loading && (
        <div class="contact-form__spinner-overlay">
          <svg class="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
            <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
          </svg>
        </div>
      )}
      <Notification onClose={() => setNotificationProps({ open: false, message: '' })} {...notificationProps} />
    </Fragment>
  );
};
