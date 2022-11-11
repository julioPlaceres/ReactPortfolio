import "./ResumeContent.css";

function ResumeContent(props) {
  return (
    <div className="resume-item">
      <h5 className="resume-title">{props.title}</h5>
      <p>
        <em>{props.date}</em>
      </p>
      <ul>
        {props.content.map((value, index) => (
          <li key={index}> ‣ {value}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResumeContent;
