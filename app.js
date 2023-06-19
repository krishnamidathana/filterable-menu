const sectionContainer = document.querySelector('.section-container');
const ffbtns = document.querySelectorAll('.ffbtns');

const arrayItems =[
    { 
        catogery:'breakfast',
        img:'1.jpg',
        title:'Pan Cakes',
        price:'$12',
        desc:`Lorem ipsum dolor  maiores inventore impedit 
        placeat nam eaque officiis iusto blanditiis maxime!`
    },
{
    catogery:'breakfast',
    img:'10.jpg',
    title:'Vada Pav',
    price:'$12',
    desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Minima, cum maiores  maxime!`
},

{
catogery:'breakfast',
img:'3.jpg',
title:'idli',
price:'$27',
desc:`Lorem ipsum  
placeat nam eaque officiis iusto blanditiis maxime!`
},

{
catogery:'Lunch',
img:'4.jpg',
title:'Bada Thali',
price:'$27',
desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
Minima, cum maior`
},
{
catogery:'Lunch',
img:'5.jpg',
title:'Bhel Bur',
price:'$27',
desc:`Lorem ipsum 
placeat nam eaque officiis iusto blanditiis maxime!`
},

{
catogery:'Lunch',
img:'6.jpg',
title:'Puliyogarai',
price:'$2',
desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
Minima, cum maiores inventore impedit `

},
{
catogery:'dinner',
img:'7.jpg',
title:'Matam santrio',
price:'$27',
desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit.`
},

{
    catogery:'dinner',
    img:'8.jpg',
    title:'Chicken pap',
    price:'$27',
    desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Minima, cum maiores inventore impedit 
   `
    },
    {
        catogery:'dinner',
        img:'9.jpg',
        title:'Lavcanos',
        price:'$7',
        desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit.`
        
        }

]

window.addEventListener('DOMContentLoaded',function(){
    displayMenuItems(arrayItems);
})

ffbtns.forEach(function(btns){
    btns.addEventListener('click',(e)=>{
        const catogery =e.currentTarget.dataset.id ;
        const fitarr =arrayItems.filter(function(objitm){
           if(objitm.catogery=== catogery){
            return objitm;
           }
        

           
        });
        if(catogery=== 'all'){
            displayMenuItems(arrayItems);
           }
           else{
            displayMenuItems(fitarr);
           }

    })
    })

function displayMenuItems(menuss) {
    let displayMenu = menuss.map(function(item){
        return  ` <article class="menu-item">
        <img src=${item.img} class="photo" alt=${item.title}> 
        <div class="item-info">
            <header>
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
        </header>

        <p class="item-text">
        ${item.desc}
        </p>
        </div>

    </article>`

    });
    displayMenu = displayMenu.join('')
    sectionContainer.innerHTML= displayMenu;

}

