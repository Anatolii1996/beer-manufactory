const Card = ({title, img, desription}) => {
    console.log(img);
  return (
    <div className="card">
      <img src={img} className="card-img-top" alt="photo" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
        {desription}
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};
export default Card;
