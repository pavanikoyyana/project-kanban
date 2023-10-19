import React from 'react';
import TicketGroup from './TicketGroup';

function KanbanBoard({ tickets, groupBy, sortOption, users }) {
  // Group and sort the tickets based on the selected options
  const groupedTickets = groupAndSortTickets(tickets, groupBy, sortOption, users);

  return (
    <div className="kanban-board">
      <div className="hgroup">
      {Object.keys(groupedTickets).map((group) => (
  <TicketGroup
    key={group}
    title={groupBy === 'userId' ? users.find((user) => user.id === group)?.name : group}
    tickets={groupedTickets[group]}
    groupingOption={groupBy}
  />
))}

      </div>
    </div>
  );
}

function groupAndSortTickets(tickets, groupBy, sortOption, users) {
  // Group the tickets based on the selected grouping option (status, user, priority)
  const grouped = tickets.reduce((result, ticket) => {
    const groupKey = ticket[groupBy];
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(ticket);
    return result;
  }, {});

  // Sort each group based on the selected sorting option (priority, title, or user name)
  Object.keys(grouped).forEach((groupKey) => {
    grouped[groupKey] = grouped[groupKey].sort((a, b) => {
      if (sortOption === 'priority') {
        return b.priority - a.priority; // Sort by priority in descending order
      } else if (sortOption === 'title') {
        return a.title.localeCompare(b.title); // Sort by title in ascending order
      } else if (sortOption === 'userName') {
        const userA = users.find((user) => user.id === a.userId);
        const userB = users.find((user) => user.id === b.userId);
        if (userA && userB) {
          return userA.name.localeCompare(userB.name); // Sort by user name
        } else {
          return 0; // Fallback if user data not found
        }
      }
      return 0; // No sorting
    });
  });

  return grouped;
}

export default KanbanBoard;
