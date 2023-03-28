function StartPopUp (props) {
    console.log('I exist');
    <div class="start-pop-up">
        <h1>{props.header}</h1>
        <form action={props.action}>
            {props.children}
        </form>
    </div>
}

export default StartPopUp;