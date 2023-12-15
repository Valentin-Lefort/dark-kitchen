//Rosa
let appetizer = [
    {
        illu:'./images/Repas/scampis.png',
        dishName:"Scampis à l'ail",
        comment:"Scampis à la sauce à l'ail accompagnés de pain",
        style:'Fish',
        price:15,
        cart:'#',
    },
    {
        illu:'./images/Repas/carpaccio.png',
        dishName:"Carpaccio de boeuf",
        comment:"Carpaccio de boeuf",
        style:'Meat',
        price:15,
        cart:'#',
    },
    {
        illu:'./images/Repas/soupe.png',
        dishName:"Soupe à l'oignon",
        comment:"Soupe à l'oignon gratinée au four",
        style:'Végétarien',
        price:14,
        cart:'#',
    },
]
//créer l'array des différents plats de la section entrée avec les différentes infos+prix+image
const shopping = document.getElementById("shop");

// Déclarez la variable totalSpan en dehors de votre boucle forEach
let totalSpan;

function toggleMarketDisplay() {
    const checkbox = document.getElementById("checkbox");
    const market = document.getElementById("shop");
  
    if (checkbox.checked) {
      market.style.display = "block";
    } else {
      market.style.display = "none";
    }
  }

// Sélectionne la balise <span> où vous souhaitez afficher le total , l'event DOMContentLoaded fait en sorte que ça s'effectue au chargement de la page
window.addEventListener("DOMContentLoaded", () => {
    totalSpan = document.getElementById("total");
    toggleMarketDisplay()
});

const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("click", toggleMarketDisplay);

let total = 0;

const priceList = document.createElement("ul");
shop.appendChild(priceList);

const totalPrice = document.createElement("span");
totalPrice.id = "total";
totalPrice.textContent = "Le caddie est vide";
// const totalDiv = document.getElementById("totalPrice");

shopping.appendChild(totalPrice)

appetizer.forEach((object)=> {
    const appetizers=document.createElement('div');
    appetizers.classList.add("appetizers");
    document.getElementById('entree').appendChild(appetizers);

    const illus=document.createElement('div');
    illus.classList.add('illus');
    appetizers.appendChild(illus);

    const illu=document.createElement('img');
    illu.classList.add('illu-entree');
    illu.src=object.illu;
    illus.appendChild(illu);

    const info=document.createElement('div');
    info.classList.add('info-entree');
    appetizers.appendChild(info);

    const dishName=document.createElement('h2');
    dishName.textContent=object.dishName;
    info.appendChild(dishName);

    const comment=document.createElement('p');
    comment.textContent=object.comment;
    dishName.appendChild(comment);

    const style=document.createElement('h3');
    style.textContent=object.style;
    info.appendChild(style);

    const prices=document.createElement('div');
    prices.classList.add('prices');
    appetizers.appendChild(prices);

    const price=document.createElement('h4');
    price.textContent=object.price + "€";
    prices.appendChild(price);

    const buy=document.createElement('div');
    buy.classList.add('buy');
    appetizers.appendChild(buy);


    const cart=document.createElement('img');
    cart.classList.add('carts');
    cart.src='./images/logo/cart-shopping-solid.svg';



    const removeButton = document.createElement('button'); // Créez un bouton de suppression
    removeButton.classList.add('btnDesign')
    removeButton.textContent = '\uF5DE'; // Texte du bouton

    cart.addEventListener("click", () => {
        // Ajoutez le prix de l'objet au total
        total += object.price;

        // Mettez à jour le contenu du span avec le montant total
        totalPrice.textContent = "Total : " + total + "€";

        const priceListItem = document.createElement('li');
        priceListItem.textContent = object.dishName + " : " + object.price + "€";
        priceList.appendChild(priceListItem);

        const removeButton = document.createElement('button'); // Créez un bouton de suppression
        removeButton.textContent = 'X'; // Texte du bouton

        // Attachez un gestionnaire d'événements au bouton de suppression
        removeButton.addEventListener('click', () => {
            // Soustrayez le prix de l'objet supprimé du total
            total -= object.price;

            // Mettez à jour le contenu du span avec le montant total
            totalPrice.textContent = "Total : " + total + "€";

            // Supprimez l'élément de la liste
            priceListItem.remove();
            removeButton.remove(); // Supprimez également le bouton de suppression
        });

        // Ajoutez le bouton de suppression à l'élément de liste (li)
        priceListItem.appendChild(removeButton);
    });

    buy.appendChild(cart);

    return object;
});
//création des différents éléments HTML via JS, associant les enfants/parents de chaque élément et ce qu'ils doivent display




let mainDishes= [
    {
        illu:'./images/Repas/tartare.png',
        dishName:"Tartare de légumes",
        comment:"Tartare de légumes de saison",
        style:'Végétarien',
        price:22,
        cart:'#',
    },
    {
        illu:'./images/Repas/volauvent.png',
        dishName:"Vol au vent",
        comment:"Vol au vent accompagnés de frites maison et de son biscuit",
        style:'Meat',
        price:25,
        cart:'#',
    },
    {
        illu:'./images/Repas/steak.png',
        dishName:"Steak, frites, salade",
        comment:"Steak accompagné de ses frites maison et salade du chef (Cuisson:médium, saignant ou à point - demandez conseil à votre serveur)",
        style:'Meat',
        price:20,
        cart:'#',
    },
    {
        illu:'./images/Repas/carbonnade.png',
        dishName:"Carbonnade à la flamande",
        comment:"Carbonnade traditionnelle flamande accompagnée de frites maison ou de pommes de terre rissolées",
        style:'Meat',
        price:22.5,
        cart:'#',
    },
]
//CTRL C CTR V

mainDishes.forEach((object)=> {
    const mainDish=document.createElement('div');
    mainDish.classList.add('mainDish');
    document.getElementById('plats').appendChild(mainDish);

    const illus=document.createElement('div');
    illus.classList.add('illus');
    mainDish.appendChild(illus);

    const illu=document.createElement('img');
    illu.classList.add('illu-plats');
    illu.src=object.illu;
    illus.appendChild(illu);

    const info=document.createElement('div');
    info.classList.add('info-plat');
    mainDish.appendChild(info);

    const dishName=document.createElement('h2');
    dishName.textContent=object.dishName;
    info.appendChild(dishName);

    const comment=document.createElement('p');
    comment.textContent=object.comment;
    info.appendChild(comment);

    const style=document.createElement('h3');
    style.textContent=object.style;
    info.appendChild(style);

    const prices=document.createElement('div');
    prices.classList.add('prices');
    mainDish.appendChild(prices);

    const price=document.createElement('h4');
    price.textContent=object.price + "€";
    prices.appendChild(price);

    const buy=document.createElement('div');
    buy.classList.add('buy');
    mainDish.appendChild(buy);

    const cart=document.createElement('img');
    cart.classList.add('carts');
    cart.src='./images/logo/cart-shopping-solid.svg';
    const removeButton = document.createElement('button'); // Créez un bouton de suppression
    removeButton.classList.add('btnDesign')
    removeButton.textContent = 'X'; // Texte du bouton

    cart.addEventListener("click", () => {
        // Ajoutez le prix de l'objet au total
        total += object.price;

        // Mettez à jour le contenu du span avec le montant total
        totalPrice.textContent = "Total : " + total + "€";

        const priceListItem = document.createElement('li');
        priceListItem.textContent = object.dishName + " : " + object.price + "€";
        priceList.appendChild(priceListItem);

        const removeButton = document.createElement('button'); // Créez un bouton de suppression
        removeButton.textContent = 'X'; // Texte du bouton

        // Attachez un gestionnaire d'événements au bouton de suppression
        removeButton.addEventListener('click', () => {
            // Soustrayez le prix de l'objet supprimé du total
            total -= object.price;

            // Mettez à jour le contenu du span avec le montant total
            totalPrice.textContent = "Total : " + total + "€";

            // Supprimez l'élément de la liste
            priceListItem.remove();
            removeButton.remove(); // Supprimez également le bouton de suppression
        });

        // Ajoutez le bouton de suppression à l'élément de liste (li)
        priceListItem.appendChild(removeButton);
    });
    buy.appendChild(cart);

    return object;
});
//CTRL C CTR V

let deserts = [
    {
        illu:'./images/Repas/moelleux.png',
        dishName:"Moelleux au chocolat",
        comment:"Moelleux au chocolat sur sa crème anglaise",
        style:'Contient du lactose',
        price: 13,
        cart:'#',
    },
    {
        illu:'./images/Repas/dameblanche.png',
        dishName:"Dame Blanche",
        comment:"Boule(s) de glace vanille couverte(s) de chocolat (1 à 3 boules par personne)",
        style:'Contient du lactose',
        price:10,
        cart:'#',
    },
    {
        illu:'./images/Repas/creme.png',
        dishName:"Crème brûlée",
        comment:"Crème brûlée accompagnée de son biscuit",
        style:'Contient du lactose',
        price:14,
        cart:'#',
    },
]
//CTRL C CTR V

deserts.forEach((object)=> {
    const desert=document.createElement('div');
    desert.classList.add('desert','Container');
    document.getElementById('desserts').appendChild(desert);

    const illus=document.createElement('div');
    illus.classList.add('illus');
    desert.appendChild(illus);

    const illu=document.createElement('img');

    illu.classList.add('illu-desserts');
    illu.src=object.illu;
    illus.appendChild(illu);

    const info=document.createElement('div');
    info.classList.add('info-desert');
    desert.appendChild(info);

    const dishName=document.createElement('h2');
    dishName.textContent=object.dishName;
    info.appendChild(dishName);

    const comment=document.createElement('p');
    comment.textContent=object.comment;
    info.appendChild(comment);

    const style=document.createElement('h3');
    style.textContent=object.style;
    info.appendChild(style);

    const prices=document.createElement('div');
    prices.classList.add('prices');
    desert.appendChild(prices);

    const price=document.createElement('h4');
    price.textContent=object.price + "€";
    prices.appendChild(price);

    const buy=document.createElement('div');
    buy.classList.add('buy');
    desert.appendChild(buy);

    const cart=document.createElement('img');
    cart.classList.add('carts');
    cart.src='./images/logo/cart-shopping-solid.svg';
    const removeButton = document.createElement('button'); // Créez un bouton de suppression
    removeButton.classList.add('btnDesign')
    removeButton.textContent = 'X'; // Texte du bouton

    cart.addEventListener("click", () => {
        // Ajoutez le prix de l'objet au total
        total += object.price;

        // Mettez à jour le contenu du span avec le montant total
        totalPrice.textContent = "Total : " + total + "€";

        const priceListItem = document.createElement('li');
        priceListItem.textContent = object.dishName + " : " + object.price + "€";
        priceList.appendChild(priceListItem);

        const removeButton = document.createElement('button'); // Créez un bouton de suppression
        removeButton.classList.add('btnDesign')
        removeButton.textContent = 'X'; // Texte du bouton

        // Attachez un gestionnaire d'événements au bouton de suppression
        removeButton.addEventListener('click', () => {
            // Soustrayez le prix de l'objet supprimé du total
            total -= object.price;

            // Mettez à jour le contenu du span avec le montant total
            totalPrice.textContent = "Total : " + total + "€";

            // Supprimez l'élément de la liste
            priceListItem.remove();
            removeButton.remove(); // Supprimez également le bouton de suppression
        });

        // Ajoutez le bouton de suppression à l'élément de liste (li)
        priceListItem.appendChild(removeButton);
    });
    buy.appendChild(cart);

    return object;
});

//ajout d'une section boisson
let drinks = [
    {
        illu:'./images/drinks/soda.png',
        dishName:"Soda",
        comment:"Choix entre Coca-Cola, Fanta, Sprite, Orangina, Seven-Up",
        style:'Pétillant',
        price: 2.5,
        cart:'#',
    },
    {
        illu:'./images/drinks/vin.png',
        dishName:"Vin",
        comment:"Vin rouge, blanc ou rosé. Demandez notre carte!",
        style:'Alcoolisé',
        price:5,
        cart:'#',
    },
    {
        illu:'./images/drinks/beer.jpeg',
        dishName:"Bière",
        comment:"Large choix de bières, fût ou bouteille, 25 ou 50",
        style:'Alcoolisé',
        price:3,
        cart:'#',
    },
    {
        illu:'./images/drinks/coffee.png',
        dishName:"Café",
        comment:"Café ou déca",
        style:'Chaud',
        price:2,
        cart:'#',
    },
]
//CTRL C CTR V

drinks.forEach((object)=> {
    const drink=document.createElement('div');
    drink.classList.add('drink','Container');
    document.getElementById('boissons').appendChild(drink);

    const illus=document.createElement('div');
    illus.classList.add('illus');
    drink.appendChild(illus);

    const illu=document.createElement('img');

    illu.classList.add('illu-drink');
    illu.src=object.illu;
    illus.appendChild(illu);

    const info=document.createElement('div');
    info.classList.add('info-drink');
    drink.appendChild(info);

    const dishName=document.createElement('h2');
    dishName.textContent=object.dishName;
    info.appendChild(dishName);

    const comment=document.createElement('p');
    comment.textContent=object.comment;
    info.appendChild(comment);

    const style=document.createElement('h3');
    style.textContent=object.style;
    info.appendChild(style);

    const prices=document.createElement('div');
    prices.classList.add('prices');
    drink.appendChild(prices);

    const price=document.createElement('h4');
    price.textContent=object.price + "€";
    prices.appendChild(price);

    const buy=document.createElement('div');
    buy.classList.add('buy');
    drink.appendChild(buy);

    const cart=document.createElement('img');
    cart.classList.add('carts');
    cart.src='./images/logo/cart-shopping-solid.svg';
    const removeButton = document.createElement('button'); // Créez un bouton de suppression
    removeButton.classList.add('btnDesign')
    removeButton.textContent = 'X'; // Texte du bouton

    cart.addEventListener("click", () => {
        // Ajoutez le prix de l'objet au total
        total += object.price;

        // Mettez à jour le contenu du span avec le montant total
        totalPrice.textContent = "Total : " + total + "€";

        const priceListItem = document.createElement('li');
        priceListItem.textContent = object.dishName + " : " + object.price + "€";
        priceList.appendChild(priceListItem);

        const removeButton = document.createElement('button'); // Créez un bouton de suppression
        removeButton.classList.add('btnDesign')
        removeButton.textContent = 'X'; // Texte du bouton

        // Attachez un gestionnaire d'événements au bouton de suppression
        removeButton.addEventListener('click', () => {
            // Soustrayez le prix de l'objet supprimé du total
            total -= object.price;

            // Mettez à jour le contenu du span avec le montant total
            totalPrice.textContent = "Total : " + total + "€";

            // Supprimez l'élément de la liste
            priceListItem.remove();
            removeButton.remove(); // Supprimez également le bouton de suppression
        });

        // Ajoutez le bouton de suppression à l'élément de liste (li)
        priceListItem.appendChild(removeButton);
    });
    buy.appendChild(cart);

    return object;
});


// Sélectionne l'élément du menu déroulant
const menuDeroulant = document.getElementById("foods");

// Cherche toutes les sections que vous souhaitez cacher/afficher
const sections = document.querySelectorAll("section");

// Ajoutez un événement pour détecter les changements de sélection
menuDeroulant.addEventListener("change", () => {
  // Récupere la valeur de l'option sélectionnée
  const selectedValue = menuDeroulant.value;

  // Selectionne un ID et display = "none" toute les autres
  sections.forEach(function() {
    switch (selectedValue) {
        case "entrees":
            document.getElementById('entree').style.display = "block"
            document.getElementById('plats').style.display = "none"
            document.getElementById('desserts').style.display = "none"
            document.getElementById('boissons').style.display = "none"
            break;
        case "plats":
            document.getElementById('plats').style.display = "block"
            document.getElementById('desserts').style.display = "none"
            document.getElementById('entree').style.display = "none"
            document.getElementById('boissons').style.display = "none"
            break;
        case "desserts":
            document.getElementById('desserts').style.display = "block"
            document.getElementById('plats').style.display = "none"
            document.getElementById('entree').style.display = "none"
            document.getElementById('boissons').style.display = "none"
            break;
        case "boissons":
            document.getElementById('boissons').style.display = "block"
            document.getElementById('desserts').style.display = "none"
            document.getElementById('plats').style.display = "none"
            document.getElementById('entree').style.display = "none"
            break;
        case "all":
            document.getElementById('entree').style.display = "block"
            document.getElementById('plats').style.display = "block"
            document.getElementById('desserts').style.display = "block"
            document.getElementById('boissons').style.display = "block"
        default:
            break;
    }
  });
});

//ajouter une section review
const customer = [
    {
        picture:"./images/clients/image-thomas.jpg",
        customerName:"Max",
        date:"16/18/2021",
        avis:"Service extra! 10/10! Décoration typique, lieux propres. La nourriture est exceptionnelle"
    },
    {
        picture:"./images/clients/image-jennie.jpg",
        customerName:"Julie",
        date:"05/12/2022",
        avis:"Service extra! 10/10! Décoration typique, lieux propres. La nourriture est exceptionnelle"
    },
    {
        picture:"./images/clients/image-emily.jpg",
        customerName:"Fiona",
        date:"20/07/2023",
        avis:"Service extra! 10/10! Décoration typique, lieux propres. La nourriture est exceptionnelle"
    },
]

const review=document.querySelector('.review');

//create elements
const reviews=document.createElement('div');
reviews.classList.add('reviews');
review.appendChild(reviews);

function customers () {
    customer.forEach((object)=> {

        const customerReview=document.createElement('div');
        customerReview.classList.add('customerReview');
        reviews.appendChild(customerReview)

        const customerName=document.createElement('h2');
        customerName.classList.add('customerName');
        customerName.textContent=object.customerName;
        customerReview.appendChild(customerName);

        const picture=document.createElement('img');
        picture.classList.add('picture');
        picture.src=object.picture;
        customerReview.appendChild(picture);

        const date=document.createElement('h3');
        date.classList.add('date');
        date.textContent=object.date;
        customerReview.appendChild(date);

        const avis=document.createElement('h4');
        avis.classList.add('avis');
        avis.textContent=object.avis;
        customerReview.appendChild(avis);

    });
}

customers();

//changer la place du bouton
const add=document.querySelector('.add');
review.insertBefore(reviews, add);

//const pour avoir la date actuelle
const date=new Date();
let day=date.getDate();
let month=date.getMonth()+1;
let year=date.getFullYear();
let currentDate=`${day}/${month}/${year}`;
console.log(currentDate); //test pour voir si ça marche :D 

//ajouter un prompt pour ajouter un review 
function newCustomer() {
    review.appendChild(add);
    const customerName=prompt('Enter your name:');
    const picture=prompt('Enter a picture of you:');
    const avis=prompt('Give us your feedback:');

     //ajouter un nouveau client
     const addingCustomer={
        customerName: customerName,
        picture: picture,
        date: currentDate,
        avis: avis,
    }

    reviews.innerHTML='';
    customer.push(addingCustomer);

    console.log(addingCustomer); //ça passe crème
    customers();
}

//ajouter un bouton qui display les prompts
const addButton=document.querySelector('.add');

addButton.addEventListener("click", function() {
    newCustomer();
});


//selectionner le body
const content = document.querySelector("body");
//selectionner le bouton
const button = document.querySelector("#toggle");
//variable qui correspond à faux
let darkMode = false;
//quand boutton est cliqué basculer du mode sombre au mode clair
button.addEventListener('click', () => {
    darkMode = !darkMode;
    toggleDarkMode();
});
//fonction pour basculer entre mode sombre et clair
function toggleDarkMode() {
    if(darkMode) {
        //appliquer un fond sombre et couleur texte clair
        content.style.backgroundImage = "radial-gradient(circle, rgba(31,30,35,1) 0%, rgba(93,93,93,1) 100%)";
        content.style.color = "#000";
    } else {
        //appliquer un fond clair et couleur de texte foncé


        content.style.backgroundImage = 'radial-gradient(circle, rgba(119, 117, 117, 1) 0%, rgba(38, 38, 41, 1) 35%)';
        content.style.color = "#FDFDFF";
    }
}