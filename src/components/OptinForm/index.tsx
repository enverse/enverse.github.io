import { h } from 'preact';
import Button from '../Button';
import TextField from '../ContactForm/components/TextField';

import './index.scss';

export default () => {
  return (
    <form class="optin-form__container" onSubmit={() => console.log('hello')}>
      <TextField label="Name" type="text" name="name" onChange={() => console.log('hello')} value="toto" />
      <TextField label="Hey" type="text" name="toto" onChange={() => console.log('hello')} value="toto" />
      <div>
        <Button fullWidth type="submit" name="submit" label="Watch the video NOW" />
      </div>
    </form>
  );
};
