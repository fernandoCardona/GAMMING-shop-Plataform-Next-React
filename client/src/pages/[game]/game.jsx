//IMPORTS DE REACT/NEXT:
//IMPORTS DEPENDENCIAS DE TERCEROS:
//IMPORTS DEPENDENCIAS DE LA APP:
//IMPORTS COMPONENTS DE LA APP:
import { BasicLayout } from "@/layouts";
import { Game } from "@/components/Game";
import { Separator, Seo } from "@/components/Shared";
//IMPORTS Styles/Images DE LA APP:

import React from 'react'

const GamePage = (props) => {
    //estraemos props:
    const { game } = props;
    //console.log(game)
    const wallpaper = game.attributes.wallpaper.data.attributes.url;

    return (
        <BasicLayout>
            <Game.HeaderWallpaper
                image={wallpaper}
            />
            <Game.Panel gameId={game.id} game={game.attributes} />

            <Separator height={50} />

            <Game.Info game={game.attributes} />

            <Separator height={30} />

            <Game.Media 
                video={game.attributes.video}
                screenshots={game.attributes.screenshots.data}
            />

            <Separator height={50} />

        </BasicLayout>
    )
}

export default GamePage

