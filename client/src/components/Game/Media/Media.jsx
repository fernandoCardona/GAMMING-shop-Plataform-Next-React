//IMPORTS DE REACT/NEXT:
//IMPORTS DEPENDENCIAS DE TERCEROS:
import { Container } from "semantic-ui-react";
//IMPORTS DEPENDENCIAS DE LA APP:
//IMPORTS COMPONENTS DE LA APP:
import { Video } from "./Video";
import { Gallery } from "./Gallery";
import { Separator } from "@/components/Shared";
//IMPORTS Styles/Images DE LA APP:


export const Media = (props) => {
    //expraemos prps:
    const { video, screenshots } = props;
    //console.log(props)

    return (
        <Container>

            <h2>Visuales</h2>

            <Separator height={30} />

            <Video video={video} />

            <Separator height={30} />

            <Gallery screenshots={screenshots} />
        </Container>
    );
}
