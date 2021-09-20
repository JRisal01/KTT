
document.getElementsByClassName('main-nav__hamburger')[0].addEventListener('click', function () {
    var menu = document.getElementsByClassName("main-nav__menu");
    var bespoke = document.getElementsByClassName("main-nav__button");
    
    if(menu[0].style.display == 'none'){
        menu[0].style.display = 'flex';
        bespoke[0].style.display = 'flex';
        menu[0].style.marginTop = '20px';
    }
    else{
        console.log('aaa')
        menu[0].style.display = 'none';
        bespoke[0].style.display = 'none';
    }
    
})