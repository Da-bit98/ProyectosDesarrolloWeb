(function(){
    const listElements = document.querySelectorAll('.menu_item--show');
    const list = document.querySelector('.menu_links');
    const menu = document.querySelector('.menu_hamburguer');

    const addClick = ()=>{
        listElements.forEach(Element=>{
            Element.addEventListener('click', ()=>{
                

                let subMenu=Element.children[1];
                let height = 0;
               
                Element.classList.toggle('menu_item--active');
                
                if(subMenu.clientHeight === 0){
                    height= subMenu.scrollHeight;
                }

                subMenu.style.height = `${height}px`;
            });

        });
    }
    
    const deleteStyleHeight =()=>{
        listElements.forEach(Element=>{
            if (Element.children[1].getAttribute('style')){
                Element.children[1].removeAttributeNS('style');
                Element.classList.remove('menu_active--item');
            }
        });
    }

    window.addEventListener('resize', ()=>{
        if (window.innerWidth > 800){
            deleteStyleHeight();
            if(list.classList.contains('menu_links--show'))
                list.classList.remove('menu_links--show');

        }else{
            addClick();
        }
    });

    if(window.innerWidth <= 800){
        addClick();
    }

menu.addEventListener('click', ()=> list.classList.toggle('menu_links--show'));

})();

