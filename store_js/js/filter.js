document.addEventListener('DOMContentLoaded', function() {
    const filterDiv = document.querySelector('.filter');
    const modal = document.querySelector('.md-filter');
    const arrow =  document.getElementById('arrow-filter');

    filterDiv.addEventListener('mouseenter', function() {
        modal.style.display = 'flex'
        arrow.style.transform = 'rotate(90deg)';
    });

    modal.addEventListener('mouseleave', function() {
        modal.style.display = 'none'
        arrow.style.transform = 'rotate(0deg)';
    });
});
