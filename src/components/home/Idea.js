function Idea () {
    const content = [
        {
            icon: <i className="fa-regular fa-comments"></i>,
            title: "Communicative",
            text: "We are always open to communication and adopt flexible approaches to matters.",
        },
        {
            icon: <i className="fa-solid fa-palette"></i>,
            title: "Creative",
            text: "We reject any platitude in design. Originality and curiosity are the main elements of our design.",
        },
        {
            icon: <i className="fa-solid fa-handshake"></i>,
            title: "Client-oriented",
            text: "Clients' needs and opinions are our first priority. It is always welcome and important that clients share their ideas and worries if there is any.",
        }
    ];

    return (
        <ul className="idea">
            {content.map((el, index)=> 
                <li key={index}>
                    <h2>{el.icon} {el.title}</h2>
                    <p>{el.text}</p>
                </li>
            )}
        </ul>
    )
};

export default Idea;
