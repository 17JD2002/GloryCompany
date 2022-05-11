import "./members.css";

const Members = () => {
  return (
    <div id="members" className="container members-container">
      <h1 className="member-txt">Members</h1>
      <div className="member member-1">
        <div className="member-img"></div>
        <div className="member-info">
        <h1 className="name">Jesus David Charris</h1>
          <h3 className="position">sᴏғᴛᴡᴀʀᴇ ᴅᴇᴠᴇʟᴏᴘᴇʀ.</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          <a href="#contact" className="contact-member">
            <span>Contact</span>
          </a>
        </div>
      </div>
      <div className="member member-2">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">Luis Miguel Cabarcas</h1>
          <h3 className="position">sᴏғᴛᴡᴀʀᴇ ᴅᴇᴠᴇʟᴏᴘᴇʀ.</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          <a href="#contact" className="contact-member">
            <span>contact</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Members;
