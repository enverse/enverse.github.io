import { h, Fragment } from "preact";
import { useState, useCallback } from "preact/hooks";

import Notification, { Props as NotificationProps } from "../Notification";

import "./index.css";

type FormValues = {
  name?: string;
  email?: string;
};

export default () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
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
      setFormValues({ ...formValues, [fieldName]: target.value });
    },
    [, formValues, setFormValues]
  );

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      setLoading(true);
      try {
        const response = await fetch("mailchimpApi", {
          method: "POST",
          body: JSON.stringify(formValues),
          headers: {
            Accept: "application/json",
          },
        });
        if (response) {
          setFormValues({
            name: "",
            email: "",
          });
          setLoading(false);
          setNotificationProps({
            message: `Succes ! We'll let you know when we go live :-)`,
            open: true,
          });
        }
      } catch (e) {
        setLoading(false);
        console.error(e);
      }
    },
    [formValues, setFormValues]
  );

  const { name, email } = formValues;

  return (
    <Fragment>
      <form className="signup-form__form" onSubmit={handleSubmit}>
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
              Nom
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
