  let app = new Vue({
    el: "#root",

    data: {
      userAccount: {
        avatar: './assets/img/avatar_io.jpg',
        name: 'Nome Utente'
      },
      contacts: [{
          name: 'Michele',
          visible: true,
          discoverable: true,
          lastAccess: "10/01/2020 19:30:50",
          avatar: './assets/img/avatar_1.jpg',
          messages: [{
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
          avatar: './assets/img/avatar_2.jpg',
          visible: false,
          discoverable: true,
          lastAccess: "20/03/2020 23:34:44",
          messages: [{
              date: '20/03/2020 16:30:00',
              text: 'Ciao come stai?',
              status: 'sent'
            },
            {
              date: '20/03/2020 16:30:55',
              text: 'Bene grazie! Stasera ci vediamo?',
              status: 'received'
            },
            {
              date: '20/03/2020 16:35:00',
              text: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Samuele',
          avatar: './assets/img/avatar_3.jpg',
          visible: false,
          discoverable: true,
          lastAccess: "28/03/2020 11:09:11",
          messages: [{
              date: '28/03/2020 10:10:40',
              text: 'La Marianna va in campagna',
              status: 'received'
            },
            {
              date: '28/03/2020 10:20:10',
              text: 'Sicuro di non aver sbagliato chat?',
              status: 'sent'
            },
            {
              date: '28/03/2020 16:15:22',
              text: 'Ah scusa!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Luca',
          avatar: './assets/img/avatar_4.jpg',
          visible: false,
          discoverable: true,
          lastAccess: "10/01/2020 18:44:08",
          messages: [{
              date: '10/01/2020 15:30:55',
              text: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              text: 'Si, ma preferirei andare al cinema',
              status: 'received'
            }
          ],
        }
      ],
      mainUser: {
        lastSeen: 'Ultimo accesso oggi alle',
      },

      newInput: '',

      showContact: ''

    },
    methods: {
      selected(index) {
        for (let i = 0; i < this.contacts.length; i++) {
          this.contacts[i].visible = false;
        }
        this.contacts[index].visible = true;
      },

      inputSend(index) {


        function time_date() {
          var today = new Date();
          var date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
          var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
          var dateTime = date + ' ' + time;

          return dateTime;
        }

        let senderInput = {
          date: time_date(),
          text: this.newInput,
          status: 'sent'
        };

        this.contacts[index].messages.push(senderInput);

        var contactList = this.contacts;

        setTimeout(function() {
          let recipientOutput = {
            date: time_date(),
            text: 'Ok!',
            status: 'received'
          };
          contactList[index].messages.push(recipientOutput);
          contactList[index].lastAccess = time_date();
        }, 1000);
      },

      findContact() {
        for (i = 0; i < this.contacts.length; i++) {
          if (this.contacts[i].name.toLowerCase().includes(this.showContact)) {
            this.contacts[i].discoverable = true;
          } else {
            this.contacts[i].discoverable = false;
          }
        }
      }
    },

  })
