//IMPORTS DE REACT/NEXT:
import { useState, useEffect } from "react";
//IMPORTS DEPENDENCIAS DE TERCEROS:
//IMPORTS DEPENDENCIAS DE LA APP:
import { Game } from "@/api";
//IMPORTS COMPONENTS DE LA APP:
import { GridGames } from "@/components/Shared";
//IMPORTS Styles/Images DE LA APP:

const gameController = new Game();

export const LatestGames = (props) => {
    //extraemos props:
    const { title, limit = 9, platformId = null } = props;
    //creamos el state de games:
    const [games, setGames] = useState(null);
    console.log(games)

    useEffect(() => {
        (async () => {
            try {
                const response = await gameController.getLatestPublished({
                    limit,
                    platformId,
                });
                setGames(response.data);

            } catch (error) {
                    console.error(error);
            }
        })();
    }, []);
    
      if (!games) return null;

    return (
        <div>
            <h2>{title}</h2>
            <GridGames games={games} />
        </div>
    )
}
