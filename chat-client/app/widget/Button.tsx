export default function Button(title: string, onClick: Function) {
    return (
        <button onClick={() => onClick()} >{title}</button>
    );
}