import React from 'react';
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Salut, je m'appelle Herby</h1>
                <p className={styles.description}>Je suis jeune diplômé en carthagéo (cartographie et géomatique), avec de solides compétences en cartographie, analyse spatiale et géomatique. Curieux d’en savoir plus ?</p>
                <a href="mailto:fleurentinherby@yahoo.fr" className={styles.contactBtn}>Contactez-moi</a>
            </div>
            <img
                src={getImageUrl("hero/heroImage.png")}
                alt="Hero image of me"
                className={styles.heroImg}
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};
