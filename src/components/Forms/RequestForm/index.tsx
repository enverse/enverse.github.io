import { h, Fragment } from 'preact';
import { useState, useCallback } from 'preact/hooks';
import Button from '../../Button';

import TextField from '../../TextField';

import './index.scss';

type FormValues = {
  name?: string;
  email?: string;
  goal?: string;
  questions?: string;
};

const { PUBLIC_FORMSPREE_FUNNEL_KEY } = import.meta.env;
const FORMSPREE_URL = 'https://formspree.io/f';

export default () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    goal: '',
    questions: ''
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      setLoading(true);
      try {
        const formspreeResponse = await fetch(`${FORMSPREE_URL}/${PUBLIC_FORMSPREE_FUNNEL_KEY}`, {
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
            goal: '',
            questions: ''
          });
          setLoading(false);
          window.location.href = '/cto/final';
        }
      } catch (e) {
        setLoading(false);
        console.error(e);
      }
    },
    [formValues]
  );

  const { name, email, goal, questions } = formValues;

  console.log(formValues);

  return (
    <form class="request__form" onSubmit={() => console.log('hello')}>
      <TextField
        name="name"
        value={name}
        onChange={(val) => setFormValues({ ...formValues, name: val })}
        type="text"
        label="Name"
        required
        autoComplete="name"
      />
      <TextField
        name="email"
        value={email}
        onChange={(val) => setFormValues({ ...formValues, email: val })}
        type="text"
        label="Email"
        required
        autoComplete="email"
      />
      <TextField
        name="goal"
        required
        value={goal}
        onChange={(val) => setFormValues({ ...formValues, goal: val })}
        type="textarea"
        label="What is the main goal you want to achieve"
      />
      <TextField
        required
        name="questions"
        value={questions}
        onChange={(val) => setFormValues({ ...formValues, questions: val })}
        type="textarea"
        label="Which questions do you want to get answered today"
      />
      <div>
        <Button
          inverted
          fullWidth
          type="submit"
          name="submit"
          label="Watch the video NOW !"
          loading={loading}
          onClick={handleSubmit}
        />
      </div>
    </form>
  );
};
