


const EventComponent : React.FC = () => {

    const onChange = (event:  React.ChangeEvent<HTMLInputElement> | undefined) => {
        console.log(event);
    }

    const onDragStart = (event:  React.DragEvent<HTMLDivElement> | undefined) => {
        console.log(event);
    };


    return (<div>
        <input onChange={onChange}/>
        <div draggable onDragStart={onDragStart}>Drag me!</div>
    </div>);
};

export default EventComponent