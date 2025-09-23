import './Botao.scss';

interface Props{
    text: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button(props: Props) {
    return (
        <>
            <button onClick={props.onClick}>{props.text}</button>
        </>
    );
}