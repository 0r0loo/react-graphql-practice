import React, { useRef } from 'react';

function MsgInput({ mutate, text = '', id = undefined }) {
  const textRef = useRef(null);

  const onSumbit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const text = textRef.current.value;
    textRef.current.value = '';
    mutate(text, id);
  };

  return (
    <form className="messages__input" onSubmit={onSumbit}>
      <textarea
        ref={textRef}
        placeholder="내용을 입력하세요."
        defaultValue={text}
      ></textarea>
      <button type="submit">완료</button>
    </form>
  );
}

export default MsgInput;
