//FUNÇÃO PARA CRIAR A MODAL
function createModal(post, id) {

    for (let i = 0; i < post.length; i++) {

        let idPost = post[i].id_post;
        if (idPost == id) {

            //SELECIONANDO O ELEMENTO ONDE VAI A MODAL
            let main = document.querySelector('body');

            //CRIANDO OS ELEMENTOS
            let wrapperModal = document.createElement('div');
            let modal = document.createElement('div');
            let modalHeader = document.createElement('header');
            let profilePost = document.createElement('div');
            let imgProfile = document.createElement('img');
            let contProfile = document.createElement('div');
            let nomeProfile = document.createElement('h2');
            let carrerProfile = document.createElement('p');
            let closeButton = document.createElement('button');
            let modalContainer = document.createElement('div');
            let titlePost = document.createElement('h2');
            let modalText1 = document.createElement('p');
            let modalText2 = document.createElement('p');
            let modalText3 = document.createElement('p');


            //ADICIONANDO CLASSE AOS ELEMENTOS
            wrapperModal.classList.add('modal-wrapper');
            modal.classList.add('modal');
            modalHeader.classList.add('modal-header');
            profilePost.classList.add('profile-post');
            closeButton.classList.add('modal-close');
            modalContainer.classList.add('modal-container');

            for (let j = 0; j < users.length; j++) {
                let userId = users[j].id;
                if (post[i].user == userId) {

                    //ADICIONANDO VALORES NOS ELEMENTOS
                    imgProfile.src = `${users[j].img}`;
                    nomeProfile.innerText = `${users[j].user}`;
                    carrerProfile.innerText = `${users[j].stack}`;
                    closeButton.innerText = 'X';
                    titlePost.innerText = `${post[i].title}`;
                    modalText2.innerText = `${post[i].text}`;

                }
            }
            //ORGANIZANDO OS ELEMENTOS DENTRO DO MODAL
            contProfile.append(nomeProfile, carrerProfile);
            profilePost.append(imgProfile, contProfile);
            modalHeader.append(profilePost, closeButton);
            modalContainer.append(titlePost, modalText1, modalText2, modalText3);
            modal.append(modalHeader, modalContainer);
            wrapperModal.append(modal);
            main.appendChild(wrapperModal);

            return main;

        }

    }





}

function createListPost(postList) {

    
    let ulListPost = document.querySelector('.list-posts');

    for (let i = 0; i < postList.length; i++) {

    let liPost = document.createElement('li');
    let divProfilePost = document.createElement('div');
    let imgProfile = document.createElement('img');
    let divProfile = document.createElement('div');
    let nameProfile = document.createElement('h2');
    let carrerProfile = document.createElement('p');
    let divPostContent = document.createElement('div');
    let titlePost = document.createElement('h2');
    let textPost = document.createElement('p');
    let divPostLike = document.createElement('div');
    let btnModal = document.createElement('button');
    let btnLike = document.createElement('button');
    let countLike = document.createElement('span');

    divProfilePost.classList.add('profile-post');
    divPostContent.classList.add('content-posts');
    divPostLike.classList.add('post-like');
    divPostLike.classList.add('flex');

    //possivel problema aqui

    btnModal.classList.add('btn-open-post');
    btnModal.setAttribute('data-modal', 'modal');
    
    btnLike.classList.add('btn-like');
    countLike.classList.add('count');
    btnModal.innerText = 'Abrir Post';
    countLike.innerText = 5

    //O POSSIVEL PROBLEMA É RELACIONADO AO DATA-MODAL

        let postId =  postList[i].user
        for (let j = 0; j < users.length; j++) {
            let userId = users[j].id
            if(userId == postId){
                
                imgProfile.src = `${users[j].img}`
                nameProfile.innerText = `${users[j].user}`
                carrerProfile.innerText = `${users[j].stack}`
                titlePost.innerText = `${postList[i].title}`
                textPost.innerText = `${postList[i].text}`
                btnModal.id = `${users[i].id}`
            }
        }
        
        divProfile.append(nameProfile, carrerProfile);
        divProfilePost.append(imgProfile, divProfile);
        divPostContent.append(titlePost, textPost);
        divPostLike.append(btnModal, btnLike, countLike);
        liPost.append(divProfilePost, divPostContent, divPostLike);
        ulListPost.appendChild(liPost);
    }

}

createListPost(posts)

let btnModal = document.querySelectorAll('.btn-open-post');

//EVENTO DE BOTAO PARA CRIAR A MODAL
//FOR PARA LER TODOS OS BOTOES COM A DATA-MODAL
for (let i = 0; i < btnModal.length; i++) {
    btnModal[i].addEventListener('click', function () {
        let idBtn = Number(btnModal[i].id);
        console.log(idBtn)

        createModal(posts, idBtn);

        //SELECIONANDO O ELEMENTO DE FECHAR O MODAL A PARTIR DA CLASSE
        const btnClose = document.querySelector('.modal-close');

        //SELECIONANDO A MODAL
        let modal = document.querySelector('.modal-wrapper');

        //ADICIONADO EVENTO DE CLICK NO BOTÃO
        btnClose.addEventListener('click', function () {
            //REMOVENDO A MODAL CRIADA
            modal.remove();
        })
    })

}
//SELECIOANDO A CLASSE 
let btnLike = document.querySelectorAll('.btn-like');

//ADICIONANDO O EVENTO DE CLICK
for (let i = 0; i < btnLike.length; i++) {

    btnLike[i].addEventListener('click', function () {
        btnLike[i].classList.toggle('btn-liked')

    })
}

//ADICIONANDO EVENTO DE CLICK
let btnFollow = document.querySelectorAll('.btn-seguir');

for (let i = 0; i < btnFollow.length; i++) {

    btnFollow[i].addEventListener('click', function () {
        btnFollow[i].classList.toggle('btn-seguir')
        let follow = btnFollow[i].classList.toggle('btn-follow')

        //CONDICIONAL PARA SABER SE JA ESTÁ SEGUINDO
        if (follow) {
            btnFollow[i].innerText = 'Seguindo';
        }
    })
}
