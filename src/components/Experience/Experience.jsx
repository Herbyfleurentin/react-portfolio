import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import bdd from "../../data/bdd.json";
import languages from "../../data/languages.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>MES COMPETENCES ET EXPERIENCES</h2>
      <h3 className={styles.sousTitle}>
        Grâce à mes années d'expérience et d'études en cartographie et géomatique, j'ai acquis de solides compétences en Systèmes d'Information Géographique (SIG), programmation, gestion de bases de données, webmapping et cartographie.
      </h3>
      <div className={styles.content}>

        {/* Section spécifique pour les compétences */}
        <h2 className={styles.title}>Experiences SIG</h2>
        <section className={styles.skills}>
                 {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </section>

        {/* Section spécifique pour la language de programmation */}
        <h2 className={styles.title}>Languages de programmation</h2>
        <section className={styles.languages}>
          {languages.map((language, id) => (
            <div key={id} className={styles.language}>
              <div className={styles.languageImageContainer}>
                <img src={getImageUrl(language.imageSrc)} alt={language.title} />
              </div>
              <p>{language.title}</p>
            </div>
          ))}
        </section> 

        {/* Section spécifique pour la base de données */}
        <h2 className={styles.title}>BASE DE DONNEES</h2>
        <section className={styles.bdd}>
          {bdd.map((bddItem, id) => (
            <div key={id} className={styles.bddItem}>
              <div className={styles.dbbImageContainer}>
                <img src={getImageUrl(bddItem.imageSrc)} alt={bddItem.title} />
              </div>
              <p>{bddItem.title}</p>
            </div>
          ))}
        </section> 

        {/* Section spécifique pour l'historique */}
        <h2 className={styles.title}>EXPERIENCES</h2>

        <section className={styles.history}>
          {history.map((historyItem, id) => (
            <li key={id} className={styles.historyItem}>
              <img
                src={getImageUrl(historyItem.imageSrc)}
                alt={`${historyItem.organisation} Logo`}
              />
              <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul>
                  {historyItem.experiences.map((experience, id) => (
                    <li key={id}>{experience}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </section>

      </div>
    </section>
  );
};
