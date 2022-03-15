import React from "react";
import Filter from "./modules/Filter";

import styles from "./styles.module.css";

function AdvisorsList() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.filterContainer}>
        <Filter />
      </div>
      <div className={styles.contentContainer}>1</div>
    </div>
  );
}

export default AdvisorsList;
