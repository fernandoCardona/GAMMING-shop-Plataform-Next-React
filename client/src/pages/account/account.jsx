//IMPORTS DE REACT/NEXT:
import { useState } from "react";
import { useRouter } from "next/router";
//IMPORTS DEPENDENCIAS DE TERCEROS:
import { Tab } from "semantic-ui-react";
//IMPORTS DEPENDENCIAS DE LA APP:
import { useAuth } from "@/hooks";
//IMPORTS COMPONENTS DE LA APP:
import { BasicLayout } from "@/layouts";
import {
    Info,
    Settings,
    Address,
    Wishlist,
    Orders,
} from "@/components/Account";
import { Separator } from "@/components/Shared/";
//IMPORTS Styles/Images DE LA APP:
import styles from "./account.module.scss";

export const AccountPage = () => {

    const { user, logout } = useAuth();
    const router = useRouter();
    const [reload, setReload] = useState(false);

    if (!user) {
        router.push("/");
        return null;
    }

  const onReload = () => setReload((prevState) => !prevState);


    const panes = [
        {
            menuItem: "Orders",
            render: () => (
                <Tab.Pane attached={false}>
                    <Orders />
                    <Separator height={80} />
                </Tab.Pane>
            ),
        },
        {
            menuItem: "Wishlist",
            render: () => (
                <Tab.Pane attached={false}>
                    <Wishlist />
                    <Separator height={80} />
                </Tab.Pane>
            ),
        },
        {
            menuItem: "Addresses",
            render: () => (
                <Tab.Pane attached={false}>
                    <Address.AddAddress onReload={onReload}/>
                    <Address.ListAddresses reload={reload} onReload={onReload} />
                    <Separator height={80} />
                </Tab.Pane>
            ),
        },
        {
            menuItem: { key: 20, icon: "settings", content: "Settingss" },
            render: () => (
                <Tab.Pane attached={false} key={99}>
                    <Settings.ChangeNameForm />
                    <div className={styles.containerForms}>
                        <Settings.ChangeEmailForm />
                        <Settings.ChangePasswordForm />
                    </div>
                    <Separator height={80} />
                </Tab.Pane>
            ),
        },
        {
            menuItem: {
                key: 21,
                icon: "log out",
                content: "",
                onClick: logout,
            },
        },
    ];
    

    
    return (
        <>
            <BasicLayout isContainer relative>
                
                    <Info/>

                    <Tab
                        menu={{ secondary: true, pointing: true }}
                        panes={panes}
                        className={styles.tabs}
                    />
                
            </BasicLayout>
        </>
       
        
    )
}

export default AccountPage;