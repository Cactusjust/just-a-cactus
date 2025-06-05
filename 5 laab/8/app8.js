const BootstrapCard = props => {
    return <div class="card m-5 w-25">
      <img class="card-img-top" src={props.image} />
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.description}</p>
        <a href={props.buttonLink} class="btn btn-primary">{props.buttonLabel}</a>
      </div>
    </div>;
  }
  const Alert = (props) => {
    return <div class="alert alert-danger" role="alert">
      {props.text}
    </div>;
  }
  Alert.propTypes = {
    text: PropTypes.string
  }
  BootstrapCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    buttonLink: PropTypes.string,
    buttonLabel: PropTypes.string,
    image: PropTypes.string
  }
  BootstrapCard.defaultProps = {
    title: "Шэнь Цинцю",
    description: "главный герой новеллы «Система „Спаси-себя-сам“ для главного злодея», в которого после своей смерти переродился Шэнь Юань. ",
    buttonLink: "https://scumvillain.fandom.com/ru/wiki/Шэнь_Цинцю",
    buttonLabel: "Go to wiki",
    image: "Dylan.png"
  }
  ReactDOM.render(
    <div>
      <BootstrapCard title="Шэнь Цинцю"
        description="главный герой новеллы «Система „Спаси-себя-сам“ для главного злодея», в которого после своей смерти переродился Шэнь Юань."
        buttonLink="https://scumvillain.fandom.com/ru/wiki/Шэнь_Цинцю"
        buttonLabel="Go to wiki"
        image="shen.jpg" />
      <BootstrapCard
        title="Welcome to react"
        description="React is the most popular rendering library in the world"
        buttonLabel="Go to the official website"
        buttonURL="https://reactjs.org/"
        image="" />
      <Alert text="OMG! Something really bad has happened!" />
    </div>, root);