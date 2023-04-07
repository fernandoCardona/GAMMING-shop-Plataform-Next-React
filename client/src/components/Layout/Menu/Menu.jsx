//IMPORTS DE REACT/NEXT:
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
//IMPORTS DEPENDENCIAS DE TERCEROS:
import { Image, Icon, Input } from "semantic-ui-react";
import classNames from "classnames";
import { map } from "lodash";
//IMPORTS DEPENDENCIAS DE LA APP:
import { Platform } from "@/api";
//IMPORTS COMPONENTS DE LA APP:
//IMPORTS Styles/Images DE LA APP:
import styles from "./Menu.module.scss";


const platformController = new Platform();

export const Menu = ( props ) => {

    const { isOpenSearch } = props;
    const [platforms, setPlatforms] = useState(null);
    const [showSearch, setShowSearch] = useState(isOpenSearch);
    const [searchText, setSearchText] = useState("");
    const router = useRouter();
 
    //Funcion de abrir y cerrar buscador:
    const openCloseSearch = () => setShowSearch((prevState) => !prevState);


    useEffect(() => {
        (async () => {
            try {
                //Peticion:
                const response = await platformController.getAll();
                setPlatforms(response.data);

            } catch (error) {
                console.error(error);
            }
        })()
    }, []);
    
    useEffect(() => {
        setSearchText(router.query.s || '');
    }, []);

    const onSearch = (text) => {
        setSearchText(text);
        console.log(searchText)
        router.replace(`/search?s=${text}`);

    };



    return (
        <div className={styles.platforms}>
            {
                map(platforms, (platform) => (
                    <Link key={platform.id} href={`/games/${platform.attributes.slug}`}>
                        <Image src={platform.attributes.icon.data.attributes.url} />
                        {platform.attributes.title}
                    </Link>
                ))
            }

            <button className={styles.search} onClick={openCloseSearch}>
                <Icon name="search" />
            </button>

            <div className={classNames(styles.inputContainer, {
                [styles.active]: showSearch,
                })}
            >
                <Input
                    id="search-games"
                    placeholder="Seaarch"
                    className={styles.input}
                    focus={true}
                    value={searchText}
                    onChange={(_, data) => onSearch(data.value)}
                />
                <Icon
                    name="close"
                    className={styles.closeInput}
                    onClick={openCloseSearch}
                />
            </div>
        </div>
    )
}
