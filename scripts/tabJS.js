document.querySelectorAll('.pizza-menu__item').forEach((e) => {
    let tabTabs = e.querySelectorAll('.pizza-size__item');
    let tabItems = e.querySelectorAll('.tab');
      for(let i =0;i<tabTabs.length;i++) {
          tabTabs[0].click();
           tabTabs[i].onclick = () => {
          tabTabs.forEach((e)  => { e.classList.remove('active') }); 
          tabItems.forEach((e)  => { e.classList.remove('active') });
          tabTabs[i].classList.add('active');
          tabItems[i].classList.add('active');
       }
     }
   });