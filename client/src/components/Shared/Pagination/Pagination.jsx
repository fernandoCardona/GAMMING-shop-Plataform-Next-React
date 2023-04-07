//IMPORTS DE REACT/NEXT:
import { useRouter } from "next/router";
//IMPORTS DEPENDENCIAS DE TERCEROS:
import { Pagination as PaginationSU } from 'semantic-ui-react';
//IMPORTS DEPENDENCIAS DE LA APP:
//IMPORTS COMPONENTS DE LA APP:
//IMPORTS Styles/Images DE LA APP
import styles from './Pagination.module.scss';


export const Pagination = (props) => {
    //Extraemso props:
    const { currentPage, totalPages } = props;
    const router = useRouter();

    const onPageChange = (_, data) => {
        const { activePage } = data;

        router.replace({ query: { ...router.query, page: activePage } });
    };

    return (
        <div className={styles.container}>
            <PaginationSU
                defaultActivePage={currentPage}
                totalPages={totalPages}
                ellipsisItem={null}
                firstItem={null}
                lastItem={null}
                onPageChange={onPageChange}
            />
        </div>
    );
}
