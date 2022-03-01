const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const buttonsBuy = document.querySelectorAll('.button--buy');
const popup = document.querySelector('.popup');
const buttonClosePopup = popup.querySelector('.popup__button-close');
const popupOverlay = document.querySelector('.overlay');
const tabsButton = document.querySelectorAll(".tabs__button");
const tabsItems = document.querySelectorAll('.tabs__description-wrapper')
const cardsLinks = document.querySelectorAll('.places__link');


const tabsToggler = () => {
  tabsButton.forEach((tabButton) => {
    tabButton.addEventListener("click", ( )=> {
      let currentButton = tabButton;
      let tabId = currentButton.getAttribute("data-tab");;
      let currentTab = document.querySelector(tabId);

      if (!tabButton.classList.contains('tabs__button--active') ) {
        tabsButton.forEach((tabButton)=> {
          tabButton.classList.remove('tabs__button--active');
        });

        tabsItems.forEach((tabItem) => {
          tabItem.classList.add('tabs__description-wrapper--hide');
        });

        tabButton.classList.add("tabs__button--active");
        currentTab.classList.remove("tabs__description-wrapper--hide");
      }
    })
  });
};

const cardRedirect = () => {
  cardsLinks.forEach((cardLink) => {
   cardLink.addEventListener('click', () => {
     let currentLink = cardLink;
     let tabId = currentLink.getAttribute('data-tab');
     let currentLinkTab = document.querySelector(tabId);

     let currentButtonId = currentLink.getAttribute("data-btn");
     let currentButton = document.querySelector(currentButtonId);

     tabsButton.forEach((tabButton)=> {
      tabButton.classList.remove('tabs__button--active');
    });

     tabsItems.forEach((tabItem) => {
      tabItem.classList.add('tabs__description-wrapper--hide');
    });

    currentLinkTab.classList.remove('tabs__description-wrapper--hide');
    currentButton.classList.add('tabs__button--active');
   })
  });
};

const navMenuToggler = () => {
  navMain.classList.remove('main-nav--nojs');
  navMain.classList.add('main-nav--closed');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });
};


const handlerButtonBuyClick = () => {
  buttonsBuy.forEach((button)=> {
    button.addEventListener('click', (evt) => {
      evt.preventDefault();
      popup.classList.add('popup--show');
      popupOverlay.classList.add('overlay--visible')
    })
  })
};


const handlerClosePopup = () => {
  buttonClosePopup.addEventListener('click', () => {
    popup.classList.remove('popup--show');
    popupOverlay.classList.remove('overlay--visible')
  })
};


const handlerClosePopupEscKey = () => {
  window.addEventListener('keydown', (evt) => {
    if (evt.key === "Escape") {
      evt.preventDefault();
    if (popup.classList.contains("popup--show")) {
      popup.classList.remove('popup--show')
      popupOverlay.classList.remove('overlay--visible')
    }
  }})
};

const handlerClosePopupOverlay = () => {
  popupOverlay.addEventListener('click', () => {
    popup.classList.remove('popup--show');
    popupOverlay.classList.remove('overlay--visible');
  })
};


const swiper = new Swiper(".swiper", {
  breakpoints: {
    320 :{
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 4,
    }
  }
});


navMenuToggler();
handlerClosePopup();
handlerButtonBuyClick();
handlerClosePopupEscKey();
handlerClosePopupOverlay()
tabsToggler();
cardRedirect();
