import React from 'react';
import Ticket from './Ticket';

function getTitleFromPriority(priority) {
  switch (priority) {
    case 0:
      return '●●● No Priority';
    case 1:
      return '🟢 Low';
    case 2:
      return '🟡 Medium';
    case 3:
      return '🔴 High';
    case 4:
      return '⚠️ Urgent';
    default:
      return ''; // Return an empty string for other cases
  }
}

function TicketGroup({ title, tickets, groupingOption }) {
  const displayTitle =
    groupingOption === 'priority' ? getTitleFromPriority(tickets[0].priority) : title;

  return (
    <div className="ticket-group">
      <h2>{displayTitle}</h2>
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} />
    )  )}
    </div>
  );
}

export default TicketGroup;
