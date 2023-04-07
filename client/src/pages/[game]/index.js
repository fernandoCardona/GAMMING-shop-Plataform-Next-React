import { Game } from "@/api";

export { default } from "./game.jsx";

export async function getServerSideProps(context) {
    const { params: { game }, } = context;
    //console.log(game)

    const gameController = new Game();
    const response = await gameController.getBySlug(game);

    return {
        props: {
            game: response,
        },
    };
}