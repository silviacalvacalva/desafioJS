import { createPost } from "./modules/postApi.js";
let guardarPostBtn = document.getElementById("publishButton");

guardarPostBtn.addEventListener("click", async() =>{
    let elementos = document.querySelectorAll(".crayons-article-form input, textarea");

    let postObjeto ={};

    elementos.forEach((elemento)=>{
        let type = elemento.type;
        console.log(type);
        let id = elemento.id;
        let valor = elemento.value;
        console.log(valor);

        switch (type) {
            case "text":
                postObjeto[id] = valor;
              break;
              case "textarea":
                postObjeto[id] = valor;
              break;
            case "number":
                postObjeto[id] = Number(valor);
              break;
            case "checkbox":
                postObjeto[id] = elemento.checked;
        }
    });
    console.log(postObjeto);
    let salvarPost = await createPost(postObjeto);
    console.log(salvarPost);

});