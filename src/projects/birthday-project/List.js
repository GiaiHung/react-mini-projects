const List = ({ people }) => {
    return (
        <>
            {people.map(person => {
                const { image, name, age, id } = person
                return (
                    <article key={id} className='birthday-person'>
                        <img src={image} alt={name}></img>
                        <div>
                            <h4>{name}</h4>
                            <p>{age} years old</p>
                        </div>
                    </article>
                )
            })}
        </>
    )
}

export default List
