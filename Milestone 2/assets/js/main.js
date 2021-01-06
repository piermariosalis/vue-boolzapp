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
                visible: true,
                avatar: './assets/img/avatar_1.jpg',
                messages: [
                {
                  date: '10/01/2020 15:30:55',
                  text: 'Hai portato a spasso il cane?',
                  status: 'sent'
                },
                {
                  date: '10/01/2020 15:50:00',
                  text: 'Ricordati di dargli da mangiare',
                  status: 'sent'
                },
                {
                date: '10/01/2020 16:15:22',
                text: 'Tutto fatto!',
                status: 'received'
                }
              ],
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
        mainUser : {
            name: 'Michele',
            lastSeen: 'Ultimo accesso oggi alle',
            avatar: './assets/img/avatar_1.jpg'
        },


    },
    methods: {
      selected(index){
        for (let i = 0; i < this.contacts.length; i++) {
            this.contacts[i].visible = false;
        }
        this.contacts[index].visible = true;
    }
},
})
