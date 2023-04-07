import { Platform, Game } from "@/api";

export { default } from './platform';

export const getServerSideProps = async(context) => {
    const { params, query } = context;
    const { page= 1} = query;
    const {platform } = params;

    
    const platformController = new Platform();
    const responsePlatform = await platformController.getBySlug(platform);

    const gameController = new Game();
    const responseGames = await gameController.getGamesByPlatformSlug(platform, page);

    return {
        props: {
            platform: responsePlatform,
            games: responseGames.data,
            pagination: responseGames.meta.pagination,
        },
    };
}