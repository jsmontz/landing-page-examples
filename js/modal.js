
/**
*
* Create Modal
* Ex: createModal('#activateButton', '#myModal');
* Ex: createModal('#activateButton2', '#myModal2', '#closeMyModal2');
*
* @param {string} activateSelector - modal button. selector of element to activate the Modal
* @param {string} modalSelector - main modal area selector.
* @param {string} closeSelector - [optional. Default: '.close'] - close modal selector.
*
**/

var createModal = (function(activateSelector, modalSelector, closeSelector) {

    var activateBtn = document.querySelector(activateSelector),
        modalContainer = document.querySelector(modalSelector),
        closeSel = closeSelector || '.close',
        closeBtn = modalContainer.querySelector(closeSel);

    if(!activateBtn || !modalSelector || !closeBtn) {
        console.warn('One of the given selectors cannot be found.');
        return;
    }

    modalContainer.style.display = 'none';

    activateBtn.onclick = showModal;
    closeBtn.onclick = hideModal;


    function showModal() {
        modalContainer.style.display = 'block';
        window.onclick = listenToHide;
    }


    function hideModal() {
        modalContainer.style.display = 'none';
        window.onclick = null;
    }


    function listenToHide(event) {
        event.stopPropagation();
        if (event.target !== modalContainer) return;
        hideModal();
    }

});
