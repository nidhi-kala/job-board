const Job = (props) => {
  const { _id, title, description } = props.job;

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{_id} </p>
      <button onClick={() => props.deleteHandler(_id)}> Delete</button>
    </div>
  );
};
export default Job;
