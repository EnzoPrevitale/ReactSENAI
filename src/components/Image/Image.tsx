import './Image.scss';

interface Props {
    alt: string;
    url: string;
}

export default function Image(props: Props) {
    return (
        <figure>
            <img src={props.url} alt={props.alt}></img>
        </figure>
    );
}