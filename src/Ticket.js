import React from 'react';

function Ticket({ ticket }) {
  const getStatusIcon = () => {
    if (ticket.status === 'In progress') {
      return '▶️'; // Unicode character for right arrow
    } else if (ticket.status === 'Backlog') {
      return '📋 '; // Unicode character for checkmark
    }
    return '📍';
  };

  const getPriorityIcon = () => {
    switch (ticket.priority) {
      case 0:
        return '●●● ';
      case 1:
        return '🟢 ';
      case 2:
        return '🟡 ';
      case 3:
        return '🔴 ';
      case 4:
        return '⚠️ ';
      default:
        return '';  // Unicode character for a dotted circle
    }
  };

  return (
    <div className="card">
    <p>{ticket.id}</p>
      <h4>{ticket.title}</h4>
      <p>{getStatusIcon()}  Status: {ticket.status}</p>
      <p>{getPriorityIcon()} Priority: {ticket.priority}</p>
     
      <p>{ticket.tag}</p>
    </div>
  );
}

export default Ticket;
