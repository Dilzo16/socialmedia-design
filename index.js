const menuItems=document.querySelectorAll('.menu-item');

//message
const messagesNotification=document.querySelector('#messages-notifications');

const messages=document.querySelector('.messages');

const message=messages.querySelectorAll('.message');
const messageSearch=document.querySelector('#message-search');
const theme=document.querySelector('#theme');
const themeModel=document.querySelector('.customize-theme');
const fontSizes=document.querySelectorAll('.choose-size span');
var root=document.querySelector(':root');
const colorPalette=document.querySelectorAll('.choose-color span');
const Bg1=document.querySelector('.bg-1');
const Bg2=document.querySelector('.bg-2');
const Bg3=document.querySelector('.bg-3');
const changeActiveItem=()=>{
    menuItems.forEach(item=>{
        item.classList.remove('active');
    })
}
menuItems.forEach(item=> {
    item.addEventListener('click',()=>{
        changeActiveItem();
        item.classList.add('active');
        if(item.id!='notifications'){
            document.querySelector('.notifications-popup').style.display='none';
        }else{
            document.querySelector('.notifications-popup').style.display='block';
            document.querySelector('#notifications .notification-count').style.display='none';
        }
    })
})


messagesNotification.addEventListener('click',()=>{
    messages.style.boxShadow='0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display='none';
    setTimeout(()=>{
        messages.style.boxShadow='none';
    },2000)
})

const searchMessage=()=>{
    const val=messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name=chat.querySelector("h5").textContent.toLowerCase();
        console.log(name);
        if(name.indexOf(val) != -1){
            chat.style.display='flex';
        }else{
            chat.style.display='none'
        }
   }) 
}

messageSearch.addEventListener('keyup',searchMessage);


const openThemeModel=()=>{
    themeModel.style.display='grid';
}

const closeThemeModel=(e)=>{
    if(e.target.classList.contains('customize-theme')){
        themeModel.style.display='none';
    }
}

themeModel.addEventListener('click',closeThemeModel);

theme.addEventListener('click',openThemeModel);

const removeSizeSelector=()=>{
    fontSizes.forEach(size=>{
        size.classList.remove('active');
    })
}

fontSizes.forEach(size=>{
    
    size.addEventListener('click',()=>{
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');
        if(size.classList.contains('font-size-1')){
            fontSize='10px';
            root.style.setProperty('--sticky-top-left','5.4rem');
            root.style.setProperty('--sticky-top-right','5.4rem');
        }else if(size.classList.contains('font-size-2')){
            fontSize='13px';
            root.style.setProperty('--sticky-top-left','5.4rem');
            root.style.setProperty('--sticky-top-right','-7rem');
        }else if(size.classList.contains('font-size-3')){
            fontSize='16px';
            root.style.setProperty('--sticky-top-left','-2rem');
            root.style.setProperty('--sticky-top-right','-17rem');
        }else if(size.classList.contains('font-size-4')){
            fontSize='19px';
            root.style.setProperty('--sticky-top-left','-5rem');
            root.style.setProperty('--sticky-top-right','-25rem');
        }else if(size.classList.contains('font-size-5')){
            fontSize='22px';
            root.style.setProperty('--sticky-top-left','-12rem');
            root.style.setProperty('--sticky-top-right','-35rem');
        }
        //change html -rem font size 
        document.querySelector('html').style.fontSize=fontSize;
    })
    
})

const removeColorSelector=()=>{
    colorPalette.forEach(color=>{
        color.classList.remove('active');
    })
}

colorPalette.forEach(color=>{
    color.addEventListener('click',()=>{
        removeColorSelector();
        let primaryHue;
        color.classList.toggle('active');

        if(color.classList.contains('color-1')){
            primaryHue=252;
        }else if(color.classList.contains('color-2')){
            primaryHue=52;
        }
        else if(color.classList.contains('color-3')){
            primaryHue=352;
        }
        else if(color.classList.contains('color-4')){
            primaryHue=152;
        }else if(color.classList.contains('color-5')){
            primaryHue=202;
        }
        root.style.setProperty('--primarHue',primaryHue);
    })
})


let lightColorLightness;
let whiteColorLightness;
let darkColorlightness;

Bg2.addEventListener('click',()=>{
    darkColorlightness='95%';
    whiteColorLightness='20%';
    lightColorLightness='15%'

    Bg2.classList.add('active');
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
});
Bg3.addEventListener('click',()=>{
    darkColorlightness='95%';
    whiteColorLightness='10%';
    lightColorLightness='0%'

    Bg3.classList.add('active');
    Bg2.classList.remove('active');
    Bg1.classList.remove('active');
    changeBG();
});
Bg1.addEventListener('click',()=>{
    darkColorlightness='17%';
    whiteColorLightness='100%';
    lightColorLightness='95%'

    Bg1.classList.add('active');
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
});
const changeBG=()=>{
    root.style.setProperty('--light-color-lightness',lightColorLightness);
    root.style.setProperty('--white-color-lightness',whiteColorLightness);
    root.style.setProperty('--dark-color-lightness',darkColorlightness);

}