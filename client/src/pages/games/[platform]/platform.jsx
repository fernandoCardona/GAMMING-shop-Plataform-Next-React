//IMPORTS DE REACT/NEXT:
//IMPORTS DEPENDENCIAS DE TERCEROS:
import { Container } from 'semantic-ui-react';
import { size } from 'lodash';
//IMPORTS DEPENDENCIAS DE LA APP:
import { BasicLayout } from '@/layouts';
//IMPORTS COMPONENTS DE LA APP:
import { GridGames, Separator, NoResult, Pagination } from '@/components/Shared'
//IMPORTS Styles/Images DE LA APP:



const PlatformPage = (props) => {
    //Extraemos props
    const { games, platform, pagination } = props;

    //Comprobamos si hag productos de esa plataforma 
    const hasProducts = size(games) > 0;
    console.log(pagination)
    return (
        <>
            <BasicLayout relative>
                <Container>
                <Separator height={50} />

                <h2>{platform.attributes.title}</h2>

                {
                hasProducts ? (
                        <>
                            <GridGames games={games} />
                            <Separator height={30} />
                            <Pagination
                                currentPage={pagination.page}
                                totalPages={pagination.pageCount}
                            /> 
                        </>
                    ) : (
                        <NoResult
                        text={`This category ${platform.attributes.title} has no products yet`}
                        />
                    )
                }

                <Separator height={100} />
                </Container>
            </BasicLayout>
        </>
        
    )
}

export default PlatformPage

