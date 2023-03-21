const menuItems = document.querySelectorAll('.menu-item');



//MESSAGES

const messageNotifiaction = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');


//THEME 
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSize = document.querySelectorAll('.choose-size span')
var root = document.querySelector(':root');
const colorpalette = document.querySelectorAll('.choose-color span');
const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');


// ===============================sidebar===================================

//remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click' , () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notificatons'){
            document.querySelector('.notifications-popup').
            style.display = 'none';
        }
        else{
            document.querySelector('.notifications-popup').
            style.display = 'block';
            document.querySelector('#notificatons .notification-count').style.display = 'none';

        }
    })
})

// ====================================MESSAGES====================================
// searches chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase(); 
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            user.style.display = 'flex';
        }
        else{
            user.style.display = 'none';
        }
    })
}

//search chat
messageSearch.addEventListener('keyup', searchMessage);

//hightlight messages card when messages menu item is clicked
messageNotifiaction.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messageNotifiaction.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    },2000);
 })
//theme / display  customization
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}
// close modal
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}

//close modal
themeModal.addEventListener('click', closeThemeModal);

theme.addEventListener('click', openThemeModal);





// =======================FONTS=============================

//remove active class from spans or font size selectors
const removeSizeSelector = () => {
    fontSize.forEach(size => {
        size.classList.remove('active');
    })
}

fontSize.forEach(size => {


    size.addEventListener('click', () => {
            removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

    if(size.classList.contains('font-size-1')){
        fontSize = ' 10px';
        root.style.setProperty('----sticky-top-left', '5.4rem');
        root.style.setProperty('----sticky-top-right', '5.4rem');
    }
    else if(size.classList.contains('font-size-2')){
        fontSize = ' 13px';
        root.style.setProperty('----sticky-top-left', '5.4rem');
        root.style.setProperty('----sticky-top-right', '-7rem');
    }

    else if(size.classList.contains('font-size-3')){
        fontSize = ' 16px';
        root.style.setProperty('----sticky-top-left', '-2rem');
        root.style.setProperty('----sticky-top-right', '-17rem');
    }
    else if(size.classList.contains('font-size-4')){
        fontSize = ' 19px';
        root.style.setProperty('----sticky-top-left', '-5rem');
        root.style.setProperty('----sticky-top-right', '-25rem');
    }
    else if(size.classList.contains('font-size-5')){
        fontSize = ' 22px';
        root.style.setProperty('----sticky-top-left', '-13rem');
        root.style.setProperty('----sticky-top-right', '-35rem');
    }


    //change fort size of the root html element
    document.querySelector('html').style.fontSize = fontSize;

})

})

//remove active class from colors 
const changeActiveColorClass = () => {
    colorpalette.forEach(colorPicker =>{
        colorPicker.classList.remove('active');
    })
}


//change promary colors
colorpalette.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        //change promary colors
        changeActiveColorClass();
        
        if(color.classList.contains('color-1')){
            primaryHue = 252;
        } else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }

        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})

//theme background values
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

//change background color
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
    
}





bg2.addEventListener('click', () =>{
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    //add active class
    bg2.classList.add('active');
    //remove active class from the others 
    bg1.classList.remove('active');
    bg3.classList.remove('active');
    changeBG();
});


bg3.addEventListener('click', () =>{
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    //add active class
    bg3.classList.add('active');
    //remove active class from the others 
    bg1.classList.remove('active');
    bg2.classList.remove('active');
    changeBG();
});