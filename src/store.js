import { reactive } from "vue";

const API_BASE_URL = "https://api.openai.com/v1";
const API_KEY = import.meta.env.VITE_APP_API_KEY;
const GPT_MODEL = "gpt-3.5-turbo";


const store = reactive({
  //imposto le variabili di gioco
  completeChat: [],
  selectedGender: null,
  action: [],
  description: "",
  imgUrl : "",
  loading: false, //per caricamento img descrizione e azione tutto insieme in pagina

  //chiamata api con ritorno json
  async makeRequest(endpoint, payload) {
    
    const url = API_BASE_URL + endpoint;
    
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + API_KEY,
      },
    });
    
    return await response.json();
  },

  //funzione selezione genere
  selezionaGenere(el, router) {
    
    //imposto la variabile
    store.selectedGender = el;
    
    //controllo
    console.log(store.selectedGender);
    
    //chiamo funzione avvio
    store.startGame(router);
  },

  //funzione avvio
  async startGame(router) {

    //imposto la chat
    store.completeChat.push({
      role: "system",
      content: `Voglio che ti comporti come se fossi un classico gioco di avventura testuale. Io sarò il protagonista e giocatore principale. Non fare riferimento a te stesso. L'ambientazione di questo gioco sarà a tema ${store.selectedGender} con personaggio un ragazza normale. Ogni ambientazione ha una descrizione di 150 caratteri seguita da una array di 3 azioni possibili che il giocatore può compiere. Una di queste azioni è mortale e termina il gioco. Non aggiungere mai altre spiegazioni. Non fare riferimento a te stesso. Le tue risposte sono solo in formato JSON come questo esempio:\n\n\n\n{"description":"descrizione ambientazione","actions":["azione 1", "azione 2", "azione 3"]}`,
    });

    //la controllo
    //console.log(store.completeChat);

    //chiamo funzione set impostazioni gioco
    await store.setStage(router);
  },

  //con la funzione get prendo la mia risposta
  async get(el, router) {

    //definisco la mia azione
    const selectedAction = el;

    //la controllo
    //console.log(selectedAction);

    //aggiungo alla chat le nuove istruzioni
    store.completeChat.push({
      role: "user",
      content: `${selectedAction}. Se questa azione è mortale l'elenco delle azioni è vuoto. Non dare altro testo che non sia un oggetto JSON. Le tue risposte sono solo in formato JSON come questo esempio:\n\n\n\n{"description": "sei morto per questa motivazione", "actions": []}`,
    });

    //le controllo
    //console.log(store.completeChat);

    //chiamo funzione set impostazioni gioco
    await store.setStage(router);
  },

  //funzione impostazioni di gioco in base alle mie decisioni
  async setStage(router) {
    
    //se è tutto ok
    try {
      
      store.loading = true;

      // carico la pagina di loading
      router.push({ name: 'loading' });
  
      //gestisco la mia richiesta
      const gptResponse = await store.makeRequest('/chat/completions', {
        temperature: 0.7,
        model: GPT_MODEL,
        messages: store.completeChat,
      });
  
      //prendo il contenuto che mi arriva e lo trasformo
      const message = gptResponse.choices[0].message;
      const content = JSON.parse(message.content);
  
      // Verifica se 'completeChat' è definito prima di chiamare 'push'
      if (store.completeChat) {
        
        //se tutto ok lo aggiungo alla chat
        store.completeChat.push(message);
      
      } else {
        //atrimenti
        console.error("'completeChat' is undefined.");
      }
      
      //verifico se abbiamo tutte le informazioni
      if (content.actions && content.description) {
        
        await this.setImage();

        //le imposto
        store.action = content.actions;
        store.description = content.description;
        
        //le controllo
        //console.log(store.action);
        //console.log(store.description);

        await new Promise(resolve => {
          const img = new Image();
          img.src = store.imgUrl;
          img.onload = resolve;
        });

        store.loading = false;
        

        if(!store.loading){

          //a questo punto se le azioni sono 0
          if (store.action.length === 0) {
  
            //indirizzo la pagina nella rotta died e siamo morti
            router.push({ name: 'died' });
          
          //altrimenti
          } else {
  
            //giochiamo e carica la pagina play
            router.push({ name: 'play' });
          }
        }else{

          console.log("non ha funzionato loading");

        }


      //se non abbiamo le informazioni 
      } else {

        //errore
        console.error("Actions or description is undefined in the response.");
      }
    
    //se qualcosa non va dal principio
    } catch (error) {

      //errore
      console.error("An error occurred during navigation:", error);

      store.loading = false;
    }
  },
  
  //funzione per generale immagine del livello
  async setImage(){
    
    //chiedo a gbt
    const generate = await this.makeRequest('/images/generations',{
      n: 1,
      size: '512x512',
      response_format: 'url',
      prompt: `questa è una storia basata su ${this.selectedGender}. ${this.description}`

    })
    //recupero url
    store.imgUrl = generate.data[0].url;
    
  },
  //il loop continua 

  decorationText() {
            
    if (this.description && this.description.length > 0) {
        
      const description = this.description;

      const element = document.getElementById('typed-text');


      let currentIndex = 0;

      const intervalId = setInterval(() => {

        element.textContent += description[currentIndex];

        currentIndex++;

        if (currentIndex === description.length) {
            
          clearInterval(intervalId);  //Ferma il timer quando il testo è completamente mostrato
        }
      }, 60);  //velocità mostra caratteri
    }
  },
});


export default store;

