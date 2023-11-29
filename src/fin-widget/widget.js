import './widget.css'
function init(user_id) {
  document.addEventListener('DOMContentLoaded', function () {
    // Create the floating button
    var floatingBtn = document.createElement('div')
    floatingBtn.classList.add('floating-btn--container')
    floatingBtn.innerHTML = `<div class='floating-btn'></div>`
    document.body.appendChild(floatingBtn)

    setTimeout(() => {
      const audio = new Audio(
        'https://discoverfin.s3.amazonaws.com/assets/button-124476.mp3',
      )
      audio.play()
      floatingBtn.innerHTML = `<span class="floating--message">Do you know your Financial Intelligence Number?</span><div class='floating-btn'></div>`
    }, 2500)

    // Create the popup overlay
    var popupOverlay = document.createElement('div')
    popupOverlay.classList.add('popup-overlay')

    // Create the popup content wrapper
    var popupContent = document.createElement('div')
    popupContent.classList.add('popup-content')
    popupOverlay.appendChild(popupContent)

    // Create the close button for the popup
    var closePopupBtn = document.createElement('span')
    closePopupBtn.classList.add('popup-close')
    closePopupBtn.innerHTML = '&times;'
    popupContent.appendChild(closePopupBtn)

    // Add the iframe inside the popup content
    var popupIframe = document.createElement('iframe')
    popupIframe.classList.add('popup-iframe')
    popupIframe.src = `https://mobile.discoverfin.io/questions?id=${user_id}` // Replace with the desired iframe link
    popupIframe.frameBorder = '0'
    popupContent.appendChild(popupIframe)

    // Function to show the popup
    var showPopup = function () {
      document.body.appendChild(popupOverlay)
    }

    // Function to hide the popup
    var hidePopup = function () {
      popupOverlay.remove()
    }

    // Event listener to show popup when the button is clicked
    floatingBtn.addEventListener('click', showPopup)

    // Event listener to hide the popup when the close button is clicked
    closePopupBtn.addEventListener('click', hidePopup)

    // Event listener to close the popup if clicked outside of it
    window.addEventListener('click', function (event) {
      if (event.target === popupOverlay) {
        hidePopup()
      }
    })
  })
}

export {
    init
}
