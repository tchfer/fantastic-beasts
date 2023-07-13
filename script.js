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