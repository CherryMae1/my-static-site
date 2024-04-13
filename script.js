document.addEventListener('DOMContentLoaded', function () {
  const filterItems = document.querySelectorAll('.filter-item');
  const gallery = document.querySelectorAll('.pic');

  filterItems.forEach((button) => {
    button.addEventListener('click', function () {
      const filter = this.dataset.filter;

      filterItems.forEach((button) => {
        button.classList.remove('active');
      });
      this.classList.add('active');

      gallery.forEach((pic) => {
        if (filter === 'home' || pic.classList.contains(filter)) {
          pic.style.display = 'block';
        } else {
          pic.style.display = 'none';
        }
      });
    });
  });
});