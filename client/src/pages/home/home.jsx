//IMPORTS DE REACT/NEXT:
//IMPORTS DEPENDENCIAS DE TERCEROS:
import { Container } from 'semantic-ui-react';
//IMPORTS DEPENDENCIAS DE LA APP:

//IMPORTS COMPONENTS DE LA APP:
import { BasicLayout } from '@/layouts';
import { Home, BannerLastGamePublished } from '@/components/Home';
import { 
    BarTrust,
    BannerAd,
    Separator,
    Seo 
} from "@/components/Shared";
//IMPORTS Styles/Images DE LA APP:

const platformId = {
    playstation: 2,
    xbox: 3,
    nintendo: 4,
    pc: 1,
}


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

                <BarTrust />

                <Separator height={100} />

                <Container>
                    <Home.LatestGames 
                        title="PlayStation" 
                        limit={3} 
                        platformId={platformId.playstation}

                    />
                </Container>

                <Separator height={100} />

                <BannerAd 
                    title='Register and get the best games' 
                    subtitle='Compare with other games and choose yours'
                    btnTitle='Login now'
                    btnLink='/account'
                    image='/images/img01.png'
                />

                <Separator height={100} />

                <Container>
                    <Home.LatestGames 
                        title="Xbox" 
                        limit={3} 
                        platformId={platformId.xbox}

                    />
                </Container>

                <Separator height={100} />

            </BasicLayout>
        </>
       
        
    )
}

export default HomePage;