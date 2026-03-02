import "./Sobre.css"

export const Sobre = ({categoria}) => {
    return(
        <div id={categoria}>
            <div id="resumo">
                <h2>Sobre Mim</h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quis rerum expedita, facere dolorum soluta. Illo hic vel saepe molestias cupiditate quisquam nobis iusto ab neque ducimus, assumenda, voluptate doloremque.</p>
            
            </div>

            <div id="meus-conhecimentos">
                <h2>Meus conhecimentos</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>ReactJS</li>
                </ul>
            </div>
        </div>
    )
}