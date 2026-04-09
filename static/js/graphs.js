// Graphs page - Image Modal functionality

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const closeBtn = document.querySelector('.modal-close-btn');
    const prevBtn = document.querySelector('.modal-prev-btn');
    const nextBtn = document.querySelector('.modal-next-btn');
    const graphCards = document.querySelectorAll('.graph-card');
    
    let currentIndex = 0;
    const graphData = [];
    
    // Collect all graph data
    graphCards.forEach((card, index) => {
        const img = card.querySelector('.graph-card-img');
        const title = card.querySelector('h4').textContent;
        const description = card.querySelector('p').textContent;
        
        graphData.push({
            src: img.src,
            alt: img.alt,
            title: title,
            description: description
        });
        
        // Add click event to image wrapper
        const imageWrapper = card.querySelector('.graph-image-wrapper');
        imageWrapper.addEventListener('click', function() {
            currentIndex = index;
            openModal();
        });
    });
    
    // Open modal function
    function openModal() {
        const data = graphData[currentIndex];
        modal.classList.add('active');
        modalImg.src = data.src;
        modalImg.alt = data.alt;
        modalCaption.textContent = data.title;
        document.body.style.overflow = 'hidden';
    }
    
    // Close modal function
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    // Close button click
    closeBtn.addEventListener('click', closeModal);
    
    // Click outside image to close
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Previous button
    prevBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + graphData.length) % graphData.length;
        const data = graphData[currentIndex];
        modalImg.src = data.src;
        modalImg.alt = data.alt;
        modalCaption.textContent = data.title;
    });
    
    // Next button
    nextBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % graphData.length;
        const data = graphData[currentIndex];
        modalImg.src = data.src;
        modalImg.alt = data.alt;
        modalCaption.textContent = data.title;
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (modal.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'ArrowLeft') {
                prevBtn.click();
            } else if (e.key === 'ArrowRight') {
                nextBtn.click();
            }
        }
    });
    
    // Touch swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    modal.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    modal.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) {
            // Swipe left - next image
            nextBtn.click();
        }
        if (touchEndX > touchStartX + swipeThreshold) {
            // Swipe right - previous image
            prevBtn.click();
        }
    }
    
    // Prevent image dragging
    modalImg.addEventListener('dragstart', function(e) {
        e.preventDefault();
    });
});
