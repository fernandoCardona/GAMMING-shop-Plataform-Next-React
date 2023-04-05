//IMPORTS DE REACT/NEXT:
//IMPORTS DEPENDENCIAS DE TERCEROS:
import { Container } from 'semantic-ui-react';
//IMPORTS DEPENDENCIAS DE LA APP:

//IMPORTS COMPONENTS DE LA APP:
import { BasicLayout } from '@/layouts';
import { Home, BannerLastGamePublished } from '@/components/Home';
import { 
    Separator,
    Seo 
} from "@/components/Shared";

//IMPORTS Styles/Images DE LA APP:


export const HomePage = () => {

    
    return (
        <>
            <BasicLayout >
                <Home.BannerLastGamePublished />

                <Separator height={100} />

                <Container>
                    <Home.LatestGames title="Latest releases" />
                </Container>

                <Separator height={100} />

            </BasicLayout>
        </>
       
        
    )
}

export default HomePage;