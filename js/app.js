"use strict";

$(document).ready(function() {

  var contentWrapper = $(".content-wrapper"),

      menuMobileButton = $(".menu-mobile-button"),
      menuMobileNavlistContainer = $(".menu-mobile-navlist-container"),
      menuMobileNavlistLi = $(".menu-mobile-navlist").find("li"),
      menuMobileNavlistLinks = $(".menu-mobile-navlist").find("li").find("a"),
      menuDesktopNavlistLinks = $(".menu-desktop-branding-container-navlist").find("li").find("a"),

      startOverlay = $(".start-overlay"),
      startMobileBrandingContainerLogo = $(".start-mobile-general-container-branding-container-logo"),
      startMobileBrandingContainerText = $(".start-mobile-general-container-branding-container-text"),
      startMobileDownloadButtonContainer = $(".start-mobile-general-container-download-buttons-container"),
      startMobileDownloadButton = $(".start-mobile-general-container-download-button"),
      startDesktopTextContainerH2 = $(".start-desktop-text-container").find("h2"),

      placesH3 = $(".places").find("h3"),
      placesP = $(".places").find("p"),
      placesIphoneContainer = $(".places-iphone-container"),
      placesIphoneScreenshot = $(".places-iphone-container-iphone-image-screen-container-screenshot"),

      citiesH3 = $(".cities").find("h3"),
      citiesH4 = $(".cities").find("h4"),
      citiesMobileCityContainer = $(".cities-mobile-city-container"),
      citiesMobileH4 = $(".cities-mobile-text-container").find("h4"),
      citiesMobileImagesArray = ["warszawa", "krakow", "poznan", "wroclaw", "lodz", "katowice", "szczecin", "lublin", "bydgoszcz", "gdansk", "sopot", "twoje-miasto"],
      citiesMobileNamesArray = ["Warszawa", "Kraków", "Poznań", "Wrocław", "Łódź", "Katowice", "Szczecin", "Lublin", "Bydgoszcz", "Gdańsk", "Sopot", "Czas na twoje miasto!"],
      citiesMobileIndex = 0,
      citiesDesktopCityContainer = $(".cities-desktop-city-container"),

      alkobotH3 = $(".alkobot").find("h3"),
      alkobotMessage = $(".alkobot-message"),
      alkobotImage = $(".alkobot-image"),

      cooperationTextContainerH3 = $(".cooperation-text-container").find("h3"),
      cooperationStepTextH5 = $(".cooperation-step-text").find("h5"),
      cooperationStepTextP = $(".cooperation-step-text").find("p"),
      cooperationStepCircle = $(".cooperation-step-circle"),

      contactH3 = $(".contact").find("h3"),
      contactFacebook = $(".contact-facebook");

  function mobileMenuToggle() {
    $(this).toggleClass("open");
    menuMobileNavlistContainer.toggleClass("open");
    contentWrapper.toggleClass("blurred");
    mobileNavListAnimation();
  }

  function mobileMenuLinkClick() {
    menuMobileNavlistContainer.toggleClass("open");
    contentWrapper.toggleClass("blurred");
    menuMobileButton.toggleClass("open");
    mobileNavListAnimation();
  }

  function mobileNavListAnimation() {
    if (menuMobileButton.hasClass("open")) {
      menuMobileNavlistLi.each(function(i) {
        setTimeout(function() {
          menuMobileNavlistLi.eq(i).removeClass("bounceOut visible").addClass("bounceIn visible");
        }, 50*(i+1));
      });
    } else {
      menuMobileNavlistLi.each(function(i) {
        setTimeout(function() {
          menuMobileNavlistLi.eq(i).removeClass("bounceIn visible").addClass("bounceOut visible");
        }, 50*(i+1));
      });
    }
  }

  function desktopMenuOnScroll() {
    var currentScroll = $(window).scrollTop()+62,
        placesSectionOffset = $(".places").offset().top,
        citiesSectionOffset = $(".cities").offset().top,
        alkobotSectionOffset = $(".alkobot").offset().top,
        cooperationSectionOffset = $(".cooperation").offset().top,
        contactSectionOffset = $(".contact").offset().top,
        maxScroll = $(document).height() - $(window).height();

    if (currentScroll > maxScroll || currentScroll > contactSectionOffset) {
      desktopMenuLinkHighlight(5);
    } else if (currentScroll > cooperationSectionOffset) {
      desktopMenuLinkHighlight(4);
    } else if (currentScroll > alkobotSectionOffset) {
      desktopMenuLinkHighlight(3);
    } else if (currentScroll > citiesSectionOffset) {
      desktopMenuLinkHighlight(2);
    } else if (currentScroll > placesSectionOffset) {
      desktopMenuLinkHighlight(1);
    } else {
      desktopMenuLinkHighlight(0);
    }
  }

  function desktopMenuLinkHighlight(i) {
    menuDesktopNavlistLinks.removeClass("selected-navlist-item");
    $(menuDesktopNavlistLinks[i]).addClass("selected-navlist-item");
  }

  function startMobileParallax() {
    startMobileDownloadButtonContainer.css("top", $(window).scrollTop()/4);
    startMobileBrandingContainerLogo.css("top", -$(window).scrollTop()/2);
  }

  function startMobileAnimation() {
    startMobileBrandingContainerText.addClass("animated fadeInDown visible");
    startMobileDownloadButton.addClass("animated fadeInUp visible");
  }

  function startMobileLogoAnimation() {
    startMobileBrandingContainerLogo.addClass("animated fadeInDown visible");
  }

  function startDesktopH2Animation() {
    startDesktopTextContainerH2.addClass("animated fadeInUp visible");
  }

  function generalAnimations() {
    var startAnimationPosition = $(window).scrollTop() + ($(window).height()) / 3,
        starAnimationPositionForContact = $(window).scrollTop() + ($(window).height()) / 1.5,
        placesSectionOffset = $(".places").offset().top,
        citiesSectionOffset = $(".cities").offset().top,
        alkobotSectionOffset = $(".alkobot").offset().top,
        cooperationSectionOffset = $(".cooperation").offset().top,
        contactSectionOffset = $(".contact").offset().top;

    if (startAnimationPosition > placesSectionOffset) {
      placesH3.addClass("animated fadeInUp");
      placesP.addClass("animated fadeInUp");
      placesIphoneContainer.addClass("animated slideInRight visible");
    }

    if (startAnimationPosition > citiesSectionOffset) {
      citiesH3.addClass("animated fadeInUp");
      citiesH4.addClass("animated fadeInUp");
      citiesMobileCityContainer.addClass("animated flipInY visible");

      citiesDesktopCityContainer.each(function(i) {
        setTimeout(function() {
          citiesDesktopCityContainer.eq(i).addClass("animated fadeInUp");
        }, 150*(i+1));
      })
    }

    if (startAnimationPosition > alkobotSectionOffset) {
      alkobotH3.addClass("animated fadeInUp");
      alkobotImage.addClass("animated fadeInRight");

      alkobotMessage.each(function(i) {
        setTimeout(function() {
          alkobotMessage.eq(i).addClass("animated slideInUp visible");
        }, 150*(i+1));
      })
    }

    if (startAnimationPosition > cooperationSectionOffset) {
      cooperationTextContainerH3.addClass("animated fadeInUp");
      cooperationStepTextH5.addClass("animated fadeInUp");
      cooperationStepTextP.addClass("animated fadeInUp");
      cooperationStepCircle.addClass("animated flipInX visible");
    }

    if (starAnimationPositionForContact > contactSectionOffset) {
      contactH3.addClass("animated fadeInUp");
      contactFacebook.addClass("animated flipInY visible");
    }
  }

  function iphoneScreenshotParallax() {
    var currentScroll = $(window).scrollTop();
    placesIphoneScreenshot.css("top", -currentScroll/2);
  }

  function mobileCitiesSlider() {
    if (citiesMobileIndex < citiesMobileImagesArray.length-1) {
      citiesMobileCityContainer.removeClass(citiesMobileImagesArray[citiesMobileIndex]);
      citiesMobileIndex++;
      citiesMobileCityContainer.addClass(citiesMobileImagesArray[citiesMobileIndex]);
      citiesMobileH4.text(citiesMobileNamesArray[citiesMobileIndex]);
    } else {
      citiesMobileCityContainer.removeClass(citiesMobileImagesArray[citiesMobileIndex]);
      citiesMobileIndex = 0;
      citiesMobileCityContainer.addClass(citiesMobileImagesArray[citiesMobileIndex]);
      citiesMobileH4.text(citiesMobileNamesArray[citiesMobileIndex]);
    }
  }

  (function() {
    $(window).on("scroll", generalAnimations);
    $(window).on("scroll", iphoneScreenshotParallax);

    if ($(window).width() < 768) {

      setTimeout(startMobileAnimation, 500);
      setTimeout(startMobileLogoAnimation, 300);
      setInterval(mobileCitiesSlider, 3000);

      $(window).on("scroll", startMobileParallax);

      menuMobileButton.on("click", mobileMenuToggle);
      menuMobileNavlistLinks.on("click", mobileMenuLinkClick);

    } else {
      startOverlay.addClass("dimmed");
      setTimeout(startDesktopH2Animation, 1000);
      $(window).on("scroll", desktopMenuOnScroll);
    }
  })();
})

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length && $(window).width() > 768) {
        $('html, body').animate({
          scrollTop: target.offset().top-60
        }, 1000);
        return false;
      } else {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  })
})
