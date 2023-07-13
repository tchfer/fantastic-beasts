function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');
  tabContent[0].classList.add('active');
  
  if(tabMenu.length && tabContent.length) {
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('active');
      })
      tabContent[index].classList.add('active');
    }
    
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      })
    });
  }
}

initTabNav();

function initAccordion() {
  const activeClass = 'active';
  const accordingList = document.querySelectorAll('.js-accordion dt');
  if(accordingList.length) {
    accordingList[0].classList.add(activeClass);
    accordingList[0].nextElementSibling.classList.add(activeClass);
    
    function activeAccordion() {
      this.classList.toggle(activeClass)
      this.nextElementSibling.classList.toggle(activeClass)
    }
    
    accordingList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    })
  }
}

initAccordion();

function initSmoothScroll() {
  /* Select all archors with href that (starts with ^) # */
  const internalLinks = document.querySelectorAll('.js-menu a[href^="#"]');
  
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  
    // Alternative way to apply smooth scrolling
    // const top = section.offsetTop;
    // window.scrollTo({
    //   top: top,
    //   behavior:'smooth',
    // });
  }
  
  internalLinks.forEach(link => {
    link.addEventListener('click', scrollToSection);
  })
}

initSmoothScroll();

function initScrollAnimation() {
  const sections = document.querySelectorAll('.js-scroll');
  
  if(sections.length) {
    const windowSize = window.innerHeight * 0.6;
    
    function animateOnScroll() {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowSize) < 0;
        if(isSectionVisible) {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      })
    }
    
    animateOnScroll();
    
    window.addEventListener('scroll', animateOnScroll);
  }
}

initScrollAnimation();