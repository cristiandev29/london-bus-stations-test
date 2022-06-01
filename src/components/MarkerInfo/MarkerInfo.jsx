import styles from "./MarkerInfo.module.css";

function MarkerInfo({ name, id }) {
  return (
    <div className={styles.marker}>
      <p>{name}</p>
      <p>{id}</p>
    </div>
  );
}

export default MarkerInfo;
