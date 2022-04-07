function Idea () {
    const content = [
        {
            icon: <i class="fa-regular fa-comments"></i>,
            title: "Communicative",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolores odio necessitatibus quae vero. Modi quia temporibus nisi consectetur placeat.",
        },
        {
            icon: <i className="fa-solid fa-palette"></i>,
            title: "Creative",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolores odio.",
        },
        {
            icon: <i class="fa-solid fa-handshake"></i>,
            title: "Customer-oriented",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolores.",
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
