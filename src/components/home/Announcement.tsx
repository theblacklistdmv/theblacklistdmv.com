import React from 'react';

interface Props {
  title: string;
  date: string;
  text: string;
}

const Announcement: React.FC<Props> = props => {
  return (
    <div style={{ padding: '0rem 1rem 0rem 1rem' }}>
      <hr></hr>
      <h4 style={{ fontWeight: 'bold' }}>{props.title}</h4>
      <small>{props.date}</small>
      <p>{props.text}</p>
      <hr></hr>
    </div>
  );
};

export default Announcement;
