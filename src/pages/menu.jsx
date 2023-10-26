export default function Menu({dataItem}) {
  return (
    <>
      <div className="menu-container">
        <img
          className="menu-bg"
          src="public/image/michael-oeser-V5nGhxuovig-unsplash.jpg"
        />
        <h1>Menu</h1>
        <span></span>
        <div className="menu-sec">
          <div className="card-list">
            {dataItem.map((item) => (
              <div className="card" key={item.id}>
                <img className="card-img" src={item.img} />
                <p className="card-name">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
