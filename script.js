const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu_bar');
const closeBtn = document.querySelector('#close_btn');

const themeToggler = document.querySelector('.theme-toggler');

menuBtn.addEventListener('click', () => {
  sideMenu.style.display = "block";
});

closeBtn.addEventListener('click', () => {
  sideMenu.style.display = "none";
});

themeToggler.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme-variables');
  themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
  themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
});

const ctx1 = document.getElementById('categoryChart').getContext('2d');
const ctx2 = document.getElementById('returnsChart').getContext('2d');

const categoryChart = new Chart(ctx1, {
  type: 'pie',
  data: {
    labels: ['Equity', 'Debt', 'Hybrid'],
    datasets: [{
      data: [40, 35, 25],
      backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe'],
    }],
  },
});

const returnsChart = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['Fund A', 'Fund B', 'Fund C'],
    datasets: [{
      label: 'Returns (%)',
      data: [12, 15, 10],
      backgroundColor: '#4bc0c0',
    }],
  },
});
