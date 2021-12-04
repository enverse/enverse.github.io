import { h } from "preact";
import { useState, useCallback } from "preact/hooks";

import "./index.css";

type FormValues = {
  name?: string;
  email?: string;
  message?: string;
  referral?: string;
};

export default () => {
  const [formValues, setFormValues] = useState<FormValues>();
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = useCallback(
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

  const handleSubmit = useCallback(async () => {
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xrgjzwoq", {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: {
          Accept: "application/json",
        },
      });
      if (response) {
        console.log(response);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }, [formValues]);
  return (
    <form onSubmit={handleSubmit}>
      <div id="name">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input
            onChange={(e) => handleChange(e, "name")}
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
              onChange={(e) => handleChange(e, "email")}
              class="mdl-textfield__input"
              type="email"
              required
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
              onChange={(e: any) => handleChange(e, "message")}
              class="mdl-textfield__input"
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
              onChange={(e) => handleChange(e, "referral")}
              class="mdl-textfield__input"
              type="text"
              id="referral"
            />
            <label class="mdl-textfield__label" for="email">
              How did you hear about us ?
            </label>
          </div>
        </div>
      </div>
      <button
        class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
        type="submit"
        name="submit"
      >
        Submit
      </button>
    </form>
  );
};
