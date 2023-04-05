//IMPORTS DE REACT/NEXT:
//IMPORTS DEPENDENCIAS DE TERCEROS:
import { Container } from 'semantic-ui-react';
//IMPORTS DEPENDENCIAS DE LA APP:

//IMPORTS COMPONENTS DE LA APP:
import { BasicLayout } from '@/layouts';
import { Home, BannerLastGamePublished } from '@/components/Home';
//import { Seo } from "@/components/Shared";

//IMPORTS Styles/Images DE LA APP:


export const HomePage = () => {

    
    return (
        <>
            <BasicLayout >
                <Home.BannerLastGamePublished />
                <Home.LatestGames />
            </BasicLayout>
        </>
       
        
    )
}

export default HomePage;