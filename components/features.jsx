import styles from "../assets/styles/features.module.less";

export default function features() {
  return (
    <div className={styles.features}>
      <div className={styles.feature}>
        <h1>JSON API</h1>
        <p>
          Lorem ipsum dolor sit amet, esse exercitation consectetur Lorem sit
          consequat proident anim mollit.
        </p>
      </div>
      <div className={styles.feature}>
        <h1>Real People</h1>
        <p>
          Lorem ipsum dolor sit amet, esse exercitation consectetur Lorem sit
          consequat proident anim mollit.
        </p>
      </div>
      <div className={styles.feature}>
        <h1>Modern Tech</h1>
        <p>
          Lorem ipsum dolor sit amet, esse exercitation consectetur Lorem sit
          consequat proident anim mollit.
        </p>
      </div>
    </div>
  );
}
