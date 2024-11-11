import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>À propos</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Moi assis avec un ordinateur portable"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Icône du curseur" />
            <div className={styles.aboutItemText}>
              <h3>Développeur Frontend</h3>
              <p>
              Actuellement, je suis en train d'apprendre le développement front-end en me spécialisant dans l'utilisation des frameworks <span>React et Angular</span>, afin d'acquérir des compétences avancées dans la création d'interfaces utilisateurs dynamiques et interactives.              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Icône du serveur" />
            <div className={styles.aboutItemText}>
              <h3>Développeur d'application WebSIG</h3>
              <p>
              J'ai de l'expérience dans le développement de portails cartographiques en open source (Lizmap, Leaflet) et propriétaires (GEO Générateur et ArcGIS), ainsi que dans la création d'APIs.              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Icône de l'interface utilisateur" />
            <div className={styles.aboutItemText}>
              <h3>Cartographe et géomaticien</h3>
              <p>
              En tant que cartographe, je maîtrise plusieurs logiciels spécialisés dans la création et l'analyse cartographique, tels que QGIS, ArcGIS, ainsi que des outils de géotraitement et de visualisation de données spatiales, permettant de produire des cartes précises et d'analyser des données géographiques complexes.              </p>
            </div>
          </li>
      
        </ul>
      </div>
    </section>
  );
};
