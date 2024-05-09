import { fetchAllPost } from "./modules/postApi.js";

const create_post_button = document.querySelector('#create_post_button');
create_post_button.addEventListener('click', () => {
    window.location.href = '/CreatePost/'

})

const createCard = (post) => {
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body")
    let card = document.createElement("div");
    card.classList.add("card","mb-3");
    let enlace = document.createElement("a");
    let cardImg = document.createElement("img");
    cardImg.classList.add("card-img-top");
    cardImg.src = post.coverImage;
    let cardBody2 = document.createElement("div");
    cardBody2.classList.add("card-body");
    let cardTop = document.createElement("div");
    cardTop.classList.add("card__top","d-flex");
    let cardTopMeta = document.createElement("div");
    cardTopMeta.classList.add("card__top-meta");
    let cardTopAutorPic = document.createElement("div");
    cardTopAutorPic.classList.add("card__top-autor-pic");
    let cardTopAutorAvatar = document.createElement("a");
    cardTopAutorAvatar.classList.add("card__top-autor-avatar");
    let cardTopAvatarImage = document.createElement("img");
    cardTopAvatarImage.classList.add("card__top-avatar-image","rounded-circle");
    cardTopAvatarImage.src = 'https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/31047/af153cd6-9994-4a68-83f4-8ddf3e13f0bf.jpg'
    let cardTopInfo = document.createElement("div");
    cardTopInfo.classList.add("card__top-info")
    let cardTopList = document.createElement("ul");
    cardTopList.classList.add("card__top-list","list-unstyled");
    let cardTopName = document.createElement("li");
    cardTopName.classList.add("card__top-name")
    let cardTopP = document.createElement("p");
    let strongname = document.createElement("strong");
    strongname.textContent = "Silvia";
    strongname.classList.add("strong_name")
    let strongTeamName = document.createElement("strong");
    strongTeamName.textContent = "  Calva";
    strongTeamName.classList.add("strong_teamName")
    let cardTopDate = document.createElement("li");
    cardTopDate.textContent = "08/05/2024";
    cardTopDate.classList.add("card__top-date")
    let  cardTitleLink = document.createElement("a");
    cardTitleLink.classList.add("card-title-link","text-decoration-none");
    let  cardTitle = document.createElement("h2");
    cardTitle.textContent = post.tituloPost;
    cardTitle.classList.add("card-title")
    let cardTags = document.createElement("ul");
    cardTags.classList.add("card__tags","d-flex", "flex-wrap", "list-unstyled");
    let textDecoratioNnone = document.createElement("a");
    textDecoratioNnone.classList.add("text-decoration-none","card__tag-color");
    let textDecorationNone = document.createElement("a");
    textDecoratioNnone.classList.add("text-decoration-none","card__tag-color");
    let interactionContainer = document.createElement("div");
    interactionContainer.classList.add("interaction__container","d-flex", "justify-content-between")
    let cardReactionsDFlex = document.createElement("ul");
    cardReactionsDFlex.classList.add("card__reactions","d-flex", "flex-wrap" , "list-unstyled")
    let cardReaction = document.createElement("li");
    cardReaction.classList.add("card__reaction")
    let cardReactionImg = document.createElement("img");
    cardReactionImg.src = 'https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg'
    let cardReaction2 = document.createElement("li");
    cardReaction2.classList.add("card__reaction")
    let cardReactionImg2 = document.createElement("img");
    cardReactionImg2.src = 'https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg'
    let cardReaction3 = document.createElement("li");
    cardReaction3.classList.add("card__reaction")
    let cardReactionImg3 = document.createElement("img");
    cardReactionImg3.src = 'https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg'
    let cardReaction4 = document.createElement("li");
    cardReaction4.classList.add("card__reaction")
    let cardReactionImg4 = document.createElement("img");
    cardReactionImg4.src = 'https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg'
    let cardReaction5 = document.createElement("li");
    cardReaction5.classList.add("card__reaction")
    let cardReactionImg5 = document.createElement("img");
    cardReactionImg5.src = 'https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg'
    let cardReaction6 = document.createElement("li");
    cardReaction6.classList.add("card__reaction")
    let cardReactionText = document.createElement("li");
    cardReactionText.classList.add("card__reaction-text","d-none", "d-md-block", "mx-2")
    let cardComents = document.createElement("ul");
    cardComents.classList.add("card__coments","d-flex", "flex-wrap", "list-unstyled")
    let cardComentIcon = document.createElement("li");
    cardComentIcon.classList.add("card__coment-icon")
    let cardCommentIconImg = document.createElement("img");
    cardCommentIconImg.classList.add("card_comment_icon_img")
    cardCommentIconImg.src ='./Images/coments.svg'
    let cardComentNumber = document.createElement("li");
    cardComentNumber.classList.add("card__coment-number")
    let cardComentText = document.createElement("li");
    cardComentText.classList.add("card__coment-text","d-none" , "d-md-block", "mx-2");
    let cardReadSave = document.createElement("ul");
    cardReadSave.classList.add("card__read-save","d-flex", "flex-wrap", "list-unstyled");
    let cardRead = document.createElement("li");
    cardRead.classList.add("card__read")
    let textBodySecondary = document.createElement("small");
    textBodySecondary.classList.add("text-body-secondary")
    let cardSave = document.createElement("li");
    cardSave.classList.add("card__save")
    let cardSaveImg = document.createElement("img");




    enlace.appendChild(cardImg)
    cardTopAutorAvatar.appendChild(cardTopAvatarImage)
    cardTopAutorPic.appendChild(cardTopAutorAvatar)
    cardTopMeta.appendChild(cardTopAutorPic)
    cardTop.appendChild(cardTopMeta)
    cardTopP.appendChild(strongname)
    cardTopP.appendChild(strongTeamName)
    cardTopName.appendChild(cardTopP)
    cardTopList.appendChild(cardTopName)
    cardTopList.appendChild(cardTopDate)
    cardTopInfo.appendChild(cardTopList)
    cardTop.appendChild(cardTopInfo)
    cardBody2.appendChild(cardTop)
    cardTitleLink.appendChild(cardTitle)
    cardBody2.appendChild(cardTitleLink)
    cardTags.appendChild(textDecoratioNnone)
    cardBody2.appendChild(cardTags)
    cardReaction.appendChild(cardReactionImg) 
    cardReaction2.appendChild(cardReactionImg2) 
    cardReaction3.appendChild(cardReactionImg3) 
    cardReaction4.appendChild(cardReactionImg4) 
    cardReaction5.appendChild(cardReactionImg5)  
    cardReactionsDFlex.appendChild(cardReaction)
    cardReactionsDFlex.appendChild(cardReaction2)
    cardReactionsDFlex.appendChild(cardReaction3)
    cardReactionsDFlex.appendChild(cardReaction4)
    cardReactionsDFlex.appendChild(cardReaction5)
    cardReactionsDFlex.appendChild(cardReactionText)
    interactionContainer.appendChild(cardReactionsDFlex)
    cardBody2.appendChild(interactionContainer)
    cardComentIcon.appendChild(cardCommentIconImg)
    cardComents.appendChild(cardComentIcon)
    cardComents.appendChild(cardComentNumber)
    cardComents.appendChild(cardComentText)
    interactionContainer.appendChild(cardComents)
    cardRead.appendChild(textBodySecondary)
    cardSave.appendChild(cardSaveImg)
    cardReadSave.appendChild(cardRead)
    cardReadSave.appendChild(cardSave)
    interactionContainer.appendChild(cardReadSave)
    cardBody2.appendChild(interactionContainer)
    card.appendChild(enlace)
    card.appendChild(cardBody2)
    cardBody.appendChild(card)
  
    const cardsContainer = document.getElementById('cards-container');    
    cardsContainer.appendChild(cardBody);
  };

  
const printPost = (postArray, wrapperId) => {
    //let wrapper = document.getElementById(wrapperId);
    /* la siguiente línea debe ser reemplazada por el ciclo while que borra todos los childs de un elemento */
    //wrapper.innerHTML = "";
  
    postArray.forEach((post) => {
      /*let currentContent = wrapper.innerHTML;
      wrapper.innerHTML = currentContent + createPostCard(post);*/
      createCard(post);
    });
  };
  
  const printAllPost = async () => {
    let postArray = await fetchAllPost();
    printPost(postArray, "post-wrapper");
  };
  
  printAllPost();
  