import './Form.scss';

import { useState } from 'react';

export const Form = (props: { createNewToDo: Function }) => {
  const [text, setText] = useState<string>('');

  const formSubmit = () => {
    if (text) {
      props.createNewToDo(text);
      setText('');
    }
  };

  return (
    <div className="form-wrapper">
      <form action="#" onSubmit={formSubmit}>
        <label>
          <input
            value={text}
            type="text"
            onChange={(evt) => setText(evt.target.value)}
          />
          <button></button>
        </label>
      </form>
    </div>
  );
};
