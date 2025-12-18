async function loadBugs() {
    try {
      const response = await fetch('/api/analytics/top-bugs');
      const bugs = await response.json();
  
      const tableBody = document.getElementById('bugTableBody');
      tableBody.innerHTML = '';
  
      bugs.forEach(bug => {
        const row = document.createElement('tr');
  
        row.innerHTML = `
          <td>${bug.errorType}</td>
          <td>${bug.message}</td>
          <td>${bug.file}</td>
          <td>${bug.count}</td>
        `;
  
        tableBody.appendChild(row);
      });
  
    } catch (error) {
      console.error('Failed to load bugs:', error);
    }
  }
  
  loadBugs();
  