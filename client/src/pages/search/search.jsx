//IMPORTS DE REACT/NEXT:
import { useState, useEffect } from "react";
//IMPORTS DEPENDENCIAS DE TERCEROS:
import { Container } from "semantic-ui-react";
import { size } from "lodash";
//IMPORTS DEPENDENCIAS DE LA APP:
//IMPORTS COMPONENTS DE LA APP:
import { BasicLayout } from "@/layouts";
import {
    GridGames,
    NoResult,
    Pagination,
    Separator,
} from "@/components/Shared";
//IMPORTS Styles/Images DE LA APP:


import React from 'react'

const SearchPage = (props) => {
    //extraemos props:
    const { games, pagination, searchText } = props;

    const hasResult = size(games) > 0;


    useEffect(() => {
        document.getElementById('search-games').focus();
    }, []);



    return (
        <BasicLayout relative isOpenSearch>
            <Container>
                <Separator height={50} />

                <h2>Searching: {searchText}</h2>
                {
                    hasResult ? (
                        <>
                        <GridGames games={games} />
                        <Separator height={30} />
                        <Pagination
                            currentPage={pagination.page}
                            totalPages={pagination.pageCount}
                        />
                        </>
                    ) : (
                        <NoResult text="No matches is this search" />
                    )
                }

                <Separator height={100} />
            </Container>
        </BasicLayout>
    )
}

export default SearchPage

