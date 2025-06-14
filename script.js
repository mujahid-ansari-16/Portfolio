 const mobileMenuButton = document.getElementById('mobile-menu-button');
        const closeMobileMenuButton = document.getElementById('close-mobile-menu');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('flex');
        });

        closeMobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
        });

        function closeMobileMenu() {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up'); 
                    entry.target.style.opacity = '1';
                } else {
                    entry.target.classList.remove('animate-fade-in-up'); 
                    entry.target.style.opacity = '0'; 
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }); 

        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = '0'; 
            observer.observe(section);
        });

        const heroSection = document.getElementById('hero');
        if (heroSection) {
            heroSection.style.opacity = '1'; 
            heroSection.querySelectorAll('.animate-fade-in-down, .animate-fade-in-up, .typing-effect').forEach(el => {
                el.style.opacity = '1'; 
            });
        }