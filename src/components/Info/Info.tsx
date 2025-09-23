import './Info.scss';

interface Props {
    nome: string;
    dataNascimento: string;
    localNascimento: string;
    profissao: string;
    empresa: string;
    residencia: string;
}

export default function Info(props: Props) {
    return (
        <>
            <h1>{props.nome}</h1>
            <p>Data de nascimento: {props.dataNascimento}</p>
            <p>Nascido em: {props.localNascimento}</p>
            <p>Profissão: {props.profissao}</p>
            <p>Residência: {props.residencia}</p>
        </>
    );
}