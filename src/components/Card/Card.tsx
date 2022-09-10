import React from 'react';
import styles from './Card.module.scss';

interface CardProps {
  user: any;
}

const Card: React.FunctionComponent<CardProps> = ({ user }): JSX.Element => {
  const { name, age } = user;
  return (
    <section className={styles.cardContainer}>
      <p>{name}</p>
      <p>{age}</p>
    </section>
  );
};

export default Card;
