interface TextAreaProps {
    id: string;
    label?: string;
    name?: string;
    rows?: string | number;
    cols?: string | number;
    value: string;
}

const TextArea = ({id, label, value}: TextAreaProps) => {
    return (<>
    <label htmlFor={id}>{label}</label>
    <textarea id={id} name={id} value={value}></textarea>
    </>);
}

export default TextArea;