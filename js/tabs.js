class TabLink {
    constructor(tabElement){
      this.tabElement = tabElement;
      this.tabData = this.tabElement.dataset.tab; 
      if(this.tabData == "all"){
        this.cards = document.querySelectorAll('.card');
      } else if (this.tabData != "all") {
        this.cards = document.querySelectorAll(`.card[data-tab="${this.tabData}"]`);
      }
    this.cards = Array.from(this.cards).map(card => new TabCard(card));
    this.tabElement.addEventListener('click', () => this.chooseTab());
    };
  chooseTab(){
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.style.display ="none")
    this.tabElement.classList.add('active-tab');
    this.cards.forEach(card => card.chooseCard());
    }
  }
  class TabCard {
    constructor(cardElement){
    this.cardElement = cardElement;
    this.cardDataAos = this.cardElement.dataset.aos;
    this.cardDataAosTime =this.cardElement.dataset.aosDuration;
    }
    chooseCard(){
    this.cardElement.style.display = "inline-block";
    this.cardDataAos = "flip-right";
    this.cardDataAosTime = "1000";
    }
  }
  let tabs = document.querySelectorAll('.tab');
  tabs.forEach( tab => new TabLink(tab));