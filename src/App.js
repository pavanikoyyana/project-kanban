import React, { useState, useEffect } from 'react';
import Header from './Header';
import KanbanBoard from './KanbanBoard';
import { fetchData } from './data/api';

function App() {
  const [tickets, setTickets] = useState([]);
  const [groupBy, setGroupBy] = useState('status');
  const [sortOption, setSortOption] = useState('priority');
  const [users, setUsers] = useState([]); 

  useEffect(() => {
    async function fetchTicketData() {
      const data = await fetchData();
      setTickets(data.tickets);
      setUsers(data.users); 
    }

    fetchTicketData();
  }, []);

  const loadData = async () => {
    const data = await fetchData();
    setTickets(data.tickets);
  };

  return (
    <div className="App">
      <Header
        groupBy={groupBy}
        setGroupBy={setGroupBy}
        sortOption={sortOption}
        setSortOption={setSortOption}
        loadData={loadData}
      />
<KanbanBoard tickets={tickets} groupBy={groupBy} sortOption={sortOption} users={users} />

    </div>
  );
}

export default App;
