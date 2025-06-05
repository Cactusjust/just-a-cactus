// ReactDOM.render(output, document.getElementById("myDiv"));
const data = {
    image: "shen.jpg",
    cardTitle: "Shen Qingqiu",
    cardDescription: "главный герой новеллы «Система „Спаси-себя-сам“ для главного злодея», в которого после своей смерти переродился Шэнь Юань. ",
    button: {
      url: "https://scumvillain.fandom.com/ru/wiki/Шэнь_Цинцю",
      label: "Go to wiki"
    }
  };
  const output = <div class="card m-5 w-25">
    <img src={data.image} class="card-img-top" alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">{data.cardTitle}</h5>
      <p class="card-text">{data.cardDescription}</p>
      <a href={data.button.url} class="btn btn-primary">{data.button.label}</a>
    </div>
  </div>;
  ReactDOM.render(output, document.querySelector("#myDiv"));
  
  
  
  
  