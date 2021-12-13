import { h, Fragment } from "preact";
import { useState, useCallback } from "preact/hooks";

import Notification, { Props as NotificationProps } from "../Notification";
import { FORMSPREE_URL, MAILCHIMP_URL } from "./constants";

import "./index.css";

type FormValues = {
  name?: string;
  email?: string;
  message?: string;
  referral?: string;
  shouldSignup?: boolean;
};

export default () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
    message: "",
    referral: "",
    shouldSignup: false,
  });
  const [loading, setLoading] = useState<boolean>(false);

  const [notificationProps, setNotificationProps] =
    useState<Pick<NotificationProps, "message" | "open">>();

  const handleInputChange = useCallback(
    (
      e: h.JSX.TargetedEvent<HTMLInputElement, Event>,
      fieldName: keyof FormValues
    ) => {
      //   https://github.com/preactjs/preact/issues/193
      const target = e.target as HTMLInputElement;
      setFormValues({
        ...formValues,
        [fieldName]: target.checked || target.value,
      });
    },
    [, formValues, setFormValues]
  );

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      setLoading(true);
      try {
        const formspreeResponse = await fetch(FORMSPREE_URL, {
          method: "POST",
          body: JSON.stringify(formValues),
          headers: {
            Accept: "application/json",
          },
        });

        if (formspreeResponse) {
          // const mailChimpResponse = await fetch(MAILCHIMP_URL, {
          //   method: "POST",
          //   body: JSON.stringify({
          //     email: formValues.email,
          //     name: formValues.name,
          //   }),
          // });

          // if (mailChimpResponse) {
          setFormValues({
            name: "",
            email: "",
            message: "",
            referral: "",
          });
          setLoading(false);
          setNotificationProps({
            message: `Succes ! We'll get back to you soon :-)`,
            open: true,
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
        <div id="name">
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input
              onChange={(e) => handleInputChange(e, "name")}
              value={name}
              class="mdl-textfield__input"
              type="text"
              id="name"
            />
            <label class="mdl-textfield__label" for="name">
              Name
            </label>
          </div>
        </div>

        <div id="contact">
          <div id="email">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input
                onChange={(e) => handleInputChange(e, "email")}
                value={email}
                class="mdl-textfield__input"
                type="email"
                name="email"
                required
                autoComplete="on"
              />
              <label class="mdl-textfield__label" for="email">
                E-mail
              </label>
              <span class="mdl-textfield__error">Enter a valid email!</span>
            </div>
          </div>
        </div>
        <div id="message">
          <div id="message">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              {/* TODO fix type after issue: https://github.com/preactjs/preact/issues/1930 */}
              <textarea
                onChange={(e: any) => handleInputChange(e, "message")}
                class="mdl-textfield__input"
                value={message}
                type="text"
                id="referral"
              ></textarea>

              <label class="mdl-textfield__label" for="message">
                Message
              </label>
            </div>
          </div>
        </div>
        <div id="referral">
          <div id="referral">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input
                onChange={(e) => handleInputChange(e, "referral")}
                class="mdl-textfield__input"
                type="text"
                value={referral}
                id="referral"
              />
              <label class="mdl-textfield__label" for="email">
                How did you hear about us ?
              </label>
            </div>
          </div>
        </div>

        {/* <div id="signup" class="contact-form__signup-checkbox">
          <label class="mdl-checkbox mdl-js-checkbox" for="checkbox1">
            <span class="mdl-checkbox__label">
              Hear from us from time to time ?
            </span>
            <input
              onChange={(e) => handleInputChange(e, "shouldSignup")}
              type="checkbox"
              id="checkbox1"
              class="mdl-checkbox__input"
            />
          </label>
        </div> */}
        <button
          class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
          type="submit"
          name="submit"
          disabled={loading}
        >
          Submit
        </button>
      </form>
      {loading && (
        <div class="contact-form__spinner-overlay">
          <svg
            class="spinner"
            width="65px"
            height="65px"
            viewBox="0 0 66 66"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              class="path"
              fill="none"
              stroke-width="6"
              stroke-linecap="round"
              cx="33"
              cy="33"
              r="30"
            ></circle>
          </svg>
        </div>
      )}
      <Notification
        onClose={() => setNotificationProps({ open: false, message: "" })}
        {...notificationProps}
      />
    </Fragment>
  );
};
