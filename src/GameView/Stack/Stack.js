function Stack (props) {
    return (
        <div className="stack-container">
            <div className="stack">{props.uncommitted}</div>
            <div className="committed">{props.committed}</div>
        </div>
    );
}

export default Stack;