import styles from './styles.module.scss';

interface Props {
  travelItem: any;
}

const TravelItem = ({ travelItem }: Props) => {
  return (
    <li>
      <a href={travelItem.link}>
        <div
          className={styles.travelItem}
          style={{
            background: `url(${travelItem.imageUrl})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <p>
            <span>{travelItem.departure}</span>
            <span aria-hidden="true">{' - '}</span>
            <span>{travelItem.arrival}</span>
          </p>
          <p>{travelItem.type}</p>
          <p>
            <span>
              {`KRW ${Number(travelItem.price).toLocaleString('ko-KR')}`}
            </span>
            <span aria-hidden="true">{' ~ '}</span>
          </p>
        </div>
      </a>
    </li>
  );
};

export default TravelItem;
