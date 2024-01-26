interface Defaultcarddata{
    image:string,
    title:string,
    desc:string,
    wheretogo:string,
    
}

const Defaultcard = (props:Defaultcarddata) => {
  const cardcss: React.CSSProperties = {
    width: "18rem",
  };
  return (
    <>
      <div className="card" style={cardcss}>
        <img className="card-img-top" src={props.image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
          {props.desc}
          </p>
          <a href={props.wheretogo} className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};

export default Defaultcard;
