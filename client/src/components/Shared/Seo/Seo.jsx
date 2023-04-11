 //IMPORTS DE REACT/NEXT:
import Head from "next/head";
//IMPORTS DEPENDENCIAS DE TERCEROS:
//IMPORTS DEPENDENCIAS DE LA APP:
//IMPORTS COMPONENTS DE LA APP:
//IMPORTS Styles/Images DE LA APP:



export const Seo = (props) => {
    //Obtenemos las props:
    const { title, 
            description='Ecommerce practice exercice 1' ,
            keywords= 'HTML,CSS,SCSS, JAVASCRIPT, REACT, NEXT, JWT, STRAPI, MONGODB',
            author = 'Fernando Cardona'
    } = props;


    return (
        <Head>
            <meta charset="UTF-8"/>
            <meta name="description" content={description}/>
            <meta name="keywords" content={keywords}/>
            <meta name="author" content={author}/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>{title}</title>
        </Head>
    )
}
