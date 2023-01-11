import { deleteJob } from "../constants";

const Job = (props) => {
  const { _id, title, description } = props.job;
  const handleDelete = (e) => {
    e.preventDefault();
    deleteJob(_id);
  };
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{_id} </p>
      <button onClick={handleDelete}> Delete</button>
    </div>
  );
};
export default Job;
