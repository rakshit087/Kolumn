import { NextPage } from 'next';
import React from 'react';

interface Props {
  text: string;
  clickHandler: () => void | undefined;
}

const ActionButton = (props: Props) => {
  return (
    <button
      className='w-32 h-9 rounded-2xl font-poppins text-white bg-frgrnd'
      onClick={props.clickHandler}
    >
      {props.text}
    </button>
  );
};

export default ActionButton;