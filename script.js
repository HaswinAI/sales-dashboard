document.addEventListener("DOMContentLoaded", () => {
    // Matrix Data Population
    const matrixBody = document.getElementById("matrix-body");
  
    const data = [
      { name: "Fund A", category: "Equity", risk: "High", returns: "15%", investment: 10000 },
      { name: "Fund B", category: "Debt", risk: "Low", returns: "7%", investment: 5000 },
      { name: "Fund C", category: "Hybrid", risk: "Medium", returns: "10%", investment: 8000 },
    ];
  
    data.forEach(row => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${row.name}</td>
        <td>${row.category}</td>
        <td>${row.risk}</td>
        <td>${row.returns}</td>
        <td>$${row.investment.toLocaleString()}</td>
      `;
      matrixBody.appendChild(tr);
    });
  
    // Add Bar Chart to the Matrix Section
    const ctxMatrix = document.createElement('canvas');
    ctxMatrix.id = 'matrixChart';
    document.querySelector('.matrix').appendChild(ctxMatrix);
  
    new Chart(ctxMatrix, {
      type: 'bar',
      data: {
        labels: data.map(row => row.name),
        datasets: [{
          label: 'Investment Amount ($)',
          data: data.map(row => row.investment),
          backgroundColor: ['#4bc0c0', '#ff6384', '#36a2eb'],
        }],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                return `$${context.raw.toLocaleString()}`;
              },
            },
          },
        },
      },
    });

  
    // Theme Toggler
    const themeToggler = document.querySelector('.theme-toggler');
  
    themeToggler.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme-variables');
      themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
      themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
    });
  
    // Sidebar Toggle
    const sideMenu = document.querySelector('aside');
    const menuBtn = document.querySelector('#menu_bar');
    const closeBtn = document.querySelector('#close_btn');
  
    menuBtn.addEventListener('click', () => {
      sideMenu.style.display = 'block';
    });
  
    closeBtn.addEventListener('click', () => {
      sideMenu.style.display = 'none';
    });
  });
  