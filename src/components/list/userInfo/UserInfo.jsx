import "./userInfo.css"

const UserInfo = () => {
  return (
    <div className="userInfo">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>John Saffa</h2>
      </div>
      <div className="icons">
      <img src="./more.png" alt="More Options" />
        <img src="./video.png" alt="Video Call" />
        <img src="./edit.png" alt="Edit" />
      </div>
    </div>
  )
}

export default UserInfo
