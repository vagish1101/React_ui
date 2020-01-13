export default function customJS() {
  document.querySelector('.dragdroppable.dragdroppable-column').classList.add('baxtheme');
   
    let bar = document.querySelector('.navbar-brand');
    window.addEventListener('scroll', function(e) {
       if(window.scrollY > 0) {
        bar.querySelector('svg').style.width = '86px'
        bar.querySelector('svg').style.position = 'fixed';
        bar.querySelector('svg').style.padding = '9px 18px 9px 0px';
        document.querySelector('.navbar-header').style.left = '101px';
        document.querySelector('.navbar-header').style.zIndex = '5000';
        document.querySelector('.header-large').style.padding = '15px 48px';
        document.querySelector('.header-large').style.fontSize = '25px';
        document.querySelector('.dragdroppable.dragdroppable-column').classList.add('fixed-theme');
       } else {
        bar.querySelector('svg').style.width = '131px'
        bar.querySelector('svg').style.position = 'static';
        document.querySelector('.navbar-header').style.left = '142px';
        bar.querySelector('svg').style.padding = '0px 10px 4px 2px';
        document.querySelector('.header-large').style.padding = '16px 0';
        document.querySelector('.header-large').style.fontSize = '32px';
       
       }
    });


    // custom menu
setTimeout(function(){

if ( $('.dashboard--editing').length == 0) {
 

var containers = document.querySelectorAll('.dashboard-component-tabs');

if( containers !== null ) {
 
[].forEach.call(containers, function(container) {
  if(!container.classList.contains('--jsfied')) {
    let primary = container.querySelector('.nav-tabs')
    var primaryItems = container.querySelectorAll('.nav-tabs')[0].querySelectorAll(' li:not(.-more)')
    var moreLi = primary.querySelector('.-more');
    if (!moreLi) {
    container.classList.add('--jsfied')

    // insert "more" button and duplicate the list

    primary.insertAdjacentHTML('beforeend', `
  <li class="-more">
    <button type="button" class="more" aria-haspopup="true" aria-expanded="false">
      More<span>↓</span>
    </button>
    <ul class="-secondary nav">
    
    </ul>
  </li>
`)
var secondary = container.querySelector('.-secondary');
var secondaryItems = secondary.querySelectorAll('li');
// var secondary = $('.-secondary');
var allItems = container.querySelectorAll('li');
var moreBtn = primary.querySelector('.more');
var moreLi = primary.querySelector('.-more');
window.removeclick;
moreBtn.addEventListener('click', (e) => {
  if(e.target !== e.currentTarget) return;
  if(window.removeclick ) {
    if ( window.removeclick !=  primary) {
      removeclick.classList.remove('--show-secondary');
    }
  }
  primary.classList.toggle('--show-secondary');
  moreBtn.setAttribute('aria-expanded', container.classList.contains('--show-secondary'));
  window.removeclick = Object.assign(primary, {});
})

  
// adapt tabs

var doAdapt = () => {
  // reveal all items for the calculation
  allItems.forEach((item) => {
    item.classList.remove('hide')
  })

  // hide items that won't fit in the Primary
  let stopWidth = 0;
  let hiddenItems = []
  let primaryWidth = $('.--jsfied').width()
    primaryItems.forEach((item, i) => {
      if(primaryWidth >= stopWidth + item.offsetWidth) {
        stopWidth += item.offsetWidth + 64
      } else {
          secondary.appendChild(item)
        // item.classList.add('hide')
          hiddenItems.push(i)
      }
    })

  
  // toggle the visibility of More button and items in Secondary
  if(!hiddenItems.length) {
    moreLi.classList.add('hide');
    container.classList.remove('--show-secondary');
    moreBtn.setAttribute('aria-expanded', false);
  }
  else {  
    secondaryItems.forEach((item, i) => {
      if(!hiddenItems.includes(i)) {
        item.classList.add('hide');
      }
    })
  }
}

doAdapt() // adapt immediately on load
//  window.addEventListener('resize', doAdapt) // adapt on window resize

// hide Secondary on the outside click

document.addEventListener('click', (e) => {
  let el = e.target
  while(el) {
    if(el === secondary || el === moreBtn) {
      return;
    }
    el = el.parentNode
  }
  // container.classList.remove('--show-secondary');
  // container.querySelector('.nav-tabs ').classList.remove('--show-secondary');
  // moreBtn.setAttribute('aria-expanded', false)
})
    }
  }
});
}


}else {
  if ( $('.more').length > 0) {
  var containersremove = document.querySelectorAll('.dashboard-component-tabs');
  if( containersremove !== null ) {
  
    [].forEach.call(containersremove, function(container) {
      var primaryremove = container.querySelector('.nav-tabs');
     
      var primaryItemsremove = container.querySelectorAll('.nav-tabs')[0].querySelectorAll(' li:not(.-more)');
      primaryItemsremove.forEach((item, i) => {
        primaryremove.append(item);
      })
      var elem = container.querySelector('.-more');
      elem.parentNode.removeChild(elem);
      
    })
    
    
    
  }
}
}



}, 2000);

$('body').on('click', '.dashboard-markdown a', function() {
  if ($('.dashboard-markdown a').attr('target')) {

  }else {
    setTimeout(function(){
      location.reload();
    }, 2000);
  }
}) 
}

