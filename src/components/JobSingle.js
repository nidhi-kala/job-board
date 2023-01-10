const Job = (props) => {
  const { _id, title, description } = props.job;

  return (
    <div>
      <h2>{title}</h2>

      <p>{_id} </p>
      <p>{description}</p>
    </div>
  );
};
export default Job;
