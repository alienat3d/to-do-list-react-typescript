import './Form.scss';

import { useState } from 'react';

export const Form = (props: { 
	createNewToDo: Function;
	notifyInfo: Function;
}) => {
  const [text, setText] = useState<string>('');

  const formSubmit = () => {
    if (text) {
      props.createNewToDo(text);
			props.notifyInfo("Новая задача добавлена");
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
