import "./detail.css"


const Detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>John Saffa</h2>
        <p>These courses have been invaluable.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        {/* <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div> */}
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Share photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            {/* <div className="photoItem">
              <div className="photoDetail">
               <img src="https://images.stockcake.com/public/9/4/b/94b7fb4d-8238-4660-90b9-e14619f009a4_large/vr-experience-immersion-stockcake.jpg" alt="" />
               <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
               <img src="https://images.stockcake.com/public/9/4/b/94b7fb4d-8238-4660-90b9-e14619f009a4_large/vr-experience-immersion-stockcake.jpg" alt="" />
               <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
               <img src="https://images.stockcake.com/public/9/4/b/94b7fb4d-8238-4660-90b9-e14619f009a4_large/vr-experience-immersion-stockcake.jpg" alt="" />
               <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" />
            </div> */}
            <div className="photoItem">
              <div className="photoDetail">
               <img src="https://images.stockcake.com/public/9/4/b/94b7fb4d-8238-4660-90b9-e14619f009a4_large/vr-experience-immersion-stockcake.jpg" alt="" />
               <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon"/>
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrow.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
        <button className="logout">Logout</button>
      </div>
    </div>
  );
}

export default Detail;
