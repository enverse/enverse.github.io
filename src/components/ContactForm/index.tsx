import { h, Fragment } from 'preact';
import { useState, useCallback } from 'preact/hooks';

import Notification, { Props as NotificationProps } from '../Notification';
import TextField from '../TextField';

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
    (e: h.JSX.TargetedEvent<HTMLInputElement, Event>, fieldName: keyof FormValues) => {
      //   https://github.com/preactjs/preact/issues/193
      const target = e.target as HTMLInputElement;
      setFormValues({
        ...formValues,
        [fieldName]: target.checked || target.value
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
        />
        <TextField
          name="email"
          value={email}
          onChange={(val) => handleInputChange(val, 'email')}
          type="text"
          label="Email"
          required
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

{
  /* <div class="">
            <input onChange={(e) => handleInputChange(e, 'name')} value={name} class="" type="text" id="name" />
            <label class="" for="name">
              Name
            </label>
          </div>
        </div>

        <div>
          <div id="email">
            <div class="">
              <input
                onChange={(e) => handleInputChange(e, 'email')}
                value={email}
                class=""
                type="email"
                name="email"
                required
                autoComplete="on"
              />
              <label class="" for="email">
                E-mail
              </label>
              <span class="">Enter a valid email!</span>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div class="">
              {/* TODO fix type after issue: https://github.com/preactjs/preact/issues/1930 */
}
//       <textarea
//         onChange={(e: any) => handleInputChange(e, 'message')}
//         class=""
//         value={message}
//         type="text"
//         id="referral"
//       ></textarea>

//       <label class="" for="message">
//         Message
//       </label>
//     </div>
//   </div>
// </div>
// <div>
//   <div>
//     <div class="">
//       <input
//         onChange={(e) => handleInputChange(e, 'referral')}
//         class=""
//         type="text"
//         value={referral}
//         id="referral"
//       />
//       <label class="" for="email">
//         How did you hear about us ?
//       </label>
//     </div>
//   </div>
// </div> */}
