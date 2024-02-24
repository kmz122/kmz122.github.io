$(document).ready(function () {
  // Get the current year
  var currentYear = new Date().getFullYear()

  // Update the content of the span element with the current year
  $('#currentYear').text(currentYear)

  $('.menu-toggler').on('click', function () {
    $(this).toggleClass('open')
    $('.top-nav').toggleClass('open')
  })

  $('.top-nav .nav-link').on('click', function () {
    $('.menu-toggler').removeClass('open')
    $('.top-nav').removeClass('open')
  })

  $('nav a[href*="#"]').on('click', function () {
    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top - 100,
      },
      2000
    )
  })

  $('.up').on('click', function () {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      2000
    )
  })

  AOS.init({
    easing: 'ease',
    duration: 1800,
    once: false,
  })
})

// JavaScript
document.addEventListener('DOMContentLoaded', function () {
  const mobileDataDates = document.querySelectorAll('.mobile-data-date')
  console.log(`mobileDataDates => ${mobileDataDates}`)
  mobileDataDates.forEach(function (element) {
    const dateValue = element.parentElement.getAttribute('data-date')
    element.textContent = dateValue
  })
})
