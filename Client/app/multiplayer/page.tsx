"use client"
import React, { useState, useEffect } from 'react';
import useStore from '../store';
import { State } from '../store';
import '../css/button.css';
import '../css/multiplayer.css';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  const { lightMode, setName, setType, setCode, socket } = useStore() as State;
  const [No, setNo] = useState(false);
  const [name, setNameValue] = useState('');
  const [code, setCodeValue] = useState('');

  const style = {
    color: lightMode ? '#58554D' : 'black',
    border: No ? '1px red solid' : '',
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    if (field === 'name') {
      setNameValue(e.target.value);
    } else {
      setCodeValue(e.target.value);
    }
  };

  const check = (action: string) => {
    if (name.replace(/\s/g, '') === '') {
      alert('Please enter your name.');
      return;
    }

    if (code.replace(/\s/g, '') === '') {
      alert('Please enter a code.');
      return;
    }

    setType(action);
    socket.emit('check', { code, name });

    socket.on('NOP', (data: number) => {
      console.log(data);
      if (data >= 2) {
        setNo(true);
      } else {
        setNo(false);
        router.push('/multiplayer/lobby');
      }
    });
  };

  return (
    <div>
      <div className="LobbyCon">
        <b className="name"> Your Name:</b>
        <input type="text" maxLength={10} style={style} value={name} onChange={(e) => onChange(e, 'name')} />
        <b className="name"> Code:</b>
        <input type="text" maxLength={10} style={style} value={code} onChange={(e) => onChange(e, 'code')} />
        <div className={`button sButton  ${lightMode ? 'lightButton' : 'darkButton'}`} onClick={() => check('JOIN')}>
          JOIN
        </div>
      </div>
    </div>
  );
};

export default Page;
