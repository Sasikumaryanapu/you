import React, { useState, useEffect, useRef } from 'react';

const Birthday = () => {
  const [chat, setChat] = useState([]);
  const [userInput, setUserInput] = useState('');
  const messages = [
    { id: 1, msg: 'ily wish you a very happy birthday to you ma ❤️♾️💯🫂' },
    { id: 2, msg: 'imu' },
    { id: 3, msg: 'ihu' },
    { id: 4, msg: 'Nuv antey nak chala istam' },
    { id: 5, msg: 'Nak kuda' },
    { id: 6, msg: 'ily infinite' },
    { id: 7, msg: 'i lov you ' },
    { id: 8, msg: 'nak ekkuva' },
    { id: 9, msg: 'avun nak chala ekkuva istam' },
    { id: 10, msg: 'em chesthunav' },

  ];

  const chatContainerRef = useRef(null);

  useEffect(() => {
    fetchMessage();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [chat]);

  const fetchMessage = () => {
    setChat([{ role: 'bot', message: 'likki nenu sasi ni ily' }]);
  };

  const handleUserInput = () => {
    if (userInput === '') {
      return null;
    }

    const [user] = userInput.split(' ');

    const filtered = messages.filter(
      (message) => message.msg.toLowerCase().includes(user.toLowerCase())
    );

    if (filtered.length > 0) {
      const botMessage = `${filtered[0].msg}`;
      setChat([...chat, { role: 'user', message: userInput }, { role: 'bot', message: botMessage }]);
    } else {
      setChat([...chat, { role: 'user', message: userInput }, { role: 'bot', message: 'Baby' }]);
    }

    setUserInput('');
  };

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px',fontFamily: 'Pacifico, cursive' }}>
      <div
        ref={chatContainerRef}
        style={{
          display: 'flex',
          width: '90%',
          flexDirection: 'column',
          alignItems: 'flex-start',
          marginTop: '8px',
          overflowY: 'auto',
          maxHeight: '90vh', 
        }}
      >
        {chat.map((entry, index) => (
          <div
            key={index}
            style={{
              alignSelf: entry.role === 'bot' ? 'flex-start' : 'flex-end',
              backgroundColor: entry.role === 'bot' ? '#e1f5fe' : '#c8e6c9',
              padding: '8px',
              borderRadius: '8px',
              maxWidth: '70%',
              textAlign:'left',
              wordWrap: 'break-word',
              marginBottom: '8px',
            }}
          >
            {entry.message}
          </div>
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '4px',
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          zIndex: 999,
        }}
      >
        <input
          type="text"
          placeholder="text your andi"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          style={{
            padding: '12px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            width:'80%',
            marginRight: '8px',
            flex: 1,
            fontSize: '16px',
          }}
        />
        <button
          onClick={handleUserInput}
          style={{
            backgroundColor: '#4CAF50',
            color: '#fff',
            border: 'none',
            padding: '12px 12px',
            borderRadius: '4px',
            width:'20%',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Birthday;
