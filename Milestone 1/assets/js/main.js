let app = new Vue ({
    el: "#root",

    data: {

        userAccount: {
            avatar: './assets/img/avatar_io.jpg',
            name: 'Nome Utente'
        },
        contacts: [
            {
                name: 'Michele',
                avatar: './assets/img/avatar_1.jpg'
            },
            {
                name: 'Fabio',
                avatar: './assets/img/avatar_2.jpg'
            },
            {
                name: 'Samuele',
                avatar: './assets/img/avatar_3.jpg'
            },
            {
                name: 'Luca',
                avatar: './assets/img/avatar_4.jpg'
            }
        ],
    }
})