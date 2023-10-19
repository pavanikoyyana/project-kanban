export async function fetchData() {
    try {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      
      if (!response.ok) {
        throw new Error(`Failed to fetch data from the API. Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return { tickets: [] }; // Return an empty array or handle the error as needed
    }
  }
  