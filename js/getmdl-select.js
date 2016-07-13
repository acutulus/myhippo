{
    'use strict';
    window.onload = function () {
        getmdlSelect.init('.getmdl-select');
        document.addEventListener("DOMNodeInserted", function (ev) {
            componentHandler.upgradeDom();
        }, false);
    };

    var getmdlSelect = {
        addEventListeners: function (dropdown) {
            var input = dropdown.querySelector('input');
            var list = dropdown.querySelectorAll('li');
            var clickOpenEvt = null;
            var clickCallback = null;
            var that = this;

            var show = function(evt) {
              dropdown.classList.add("getmdl-select-visible");

              if (clickCallback !== null) {
                document.removeEventListener('click', clickCallback);
                clickCallback = null;
              }
              clickCallback = function (e) {
                  // Check to see if the document is processing the same event that
                  // displayed the menu in the first place. If so, do nothing.
                  // Also check to see if the menu is in the process of closing itself, and
                  // do nothing in that case.
                  // Also check if the clicked element is a menu item
                  // if so, do nothing.
                  if (e !== evt && e !== clickOpenEvt && !that.closing_ && e.target.parentNode !== that.element_) {
                    clickOpenEvt = null;
                    dropdown.classList.remove("is-focused");
                    document.removeEventListener('click', clickCallback);
                    clickCallback = null;
                    setTimeout(function() {
                      dropdown.classList.remove("getmdl-select-visible");
                    }, 250);
                  }
              };
              document.addEventListener('click',clickCallback);
            };

            input.onclick = function(evt) {
              clickOpenEvt = evt;
              if (!dropdown.classList.contains("getmdl-select-visible")) {
                show(evt);
              }
            };

            input.onfocus = function(evt) {
              setTimeout(function() {
                if (!dropdown.classList.contains("getmdl-select-visible")) {
                  show(evt);
                  var menu = dropdown.querySelector('.mdl-menu');
                  menu.MaterialMenu.show();
                }
              }, 50);
            };

/*
            input.onblur = function(evt) {
              setTimeout(function() {
                if (dropdown.classList.contains("getmdl-select-visible")) {
                  var menu = dropdown.querySelector('.mdl-menu');
                  menu.MaterialMenu.hide();
                  dropdown.classList.remove("is-focused");
                  document.removeEventListener('click', clickCallback);
                  console.log('removing listener');
                  clickOpenEvt = null;
                  clickCallback = null;
                  setTimeout(function() {
                    dropdown.classList.remove("getmdl-select-visible");
                  }, 250);
                }
              }, 100);
            };
*/
            [].forEach.call(list, function (li) {
                li.onclick = function () {

                    dropdown.MaterialTextfield.change(li.textContent); // handles css class changes
                    
                    // update input with the "id" value
                    input.dataset.val = li.dataset.val || '';

                    if ("createEvent" in document) {
                        var evt = document.createEvent("HTMLEvents");
                        evt.initEvent("change", false, true);
                        input.dispatchEvent(evt);
                    } else {
                        input.fireEvent("onchange");
                    }
                };
            });
        },
        init: function (selector) {
            var dropdowns = document.querySelectorAll(selector);
            [].forEach.call(dropdowns, function (i) {
                getmdlSelect.addEventListeners(i);
                var menuWidth  = i.querySelector('.mdl-menu').clientWidth;
                var labelWidth = i.querySelector('.mdl-textfield__label > span').offsetWidth + 20;
                i.querySelector('.getmdl-select-container').style.width = Math.max(menuWidth, labelWidth) + 'px';
                i.querySelector('.mdl-menu__container').style.minWidth = Math.max(menuWidth, labelWidth) + 'px';
                i.querySelector('.mdl-menu__container').style.maxWidth = Math.max(menuWidth, labelWidth) + 'px';
                i.querySelector('.mdl-menu').style.minWidth = Math.max(menuWidth, labelWidth) + 'px';
                i.querySelector('.mdl-menu').style.maxWidth = Math.max(menuWidth, labelWidth) + 'px';
            });
        }
    };
}