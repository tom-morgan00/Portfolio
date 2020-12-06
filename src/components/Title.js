import React from 'react';

export default function Title({ title, color }) {
  const styles = {
    textTransform: 'capitalize',
    textAlign: 'center',
    marginBottom: '50px',
    fontSize: '3rem',
    fontWeight: '700',
    fontFamily: 'Lato',
    color,
  };
  return (
    <div style={styles}>
      <h2>{title}</h2>
    </div>
  );
}
