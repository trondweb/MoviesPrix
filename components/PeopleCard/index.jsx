import Image from 'next/image';
import styles from './castCard.scss';

export default function PeopleCard(props) {
    return (
        <div className="card" key={props.id}>
            <Image className="img" src={`https://image.tmdb.org/t/p/w300${props.profile_path}`} alt={props.name} width={250} height={350} />
            <div className="info">
                <h3 className="name">{props.name}</h3>
                <p className="character">{props.character}</p>
            </div>
        </div>)
}