//IMPORTS DE REACT/NEXT:
import Link from "next/link";
import { useRouter } from "next/router";
//IMPORTS DEPENDENCIAS DE TERCEROS:
import { Icon, Image } from "semantic-ui-react";
//IMPORTS DEPENDENCIAS DE LA APP:
import { useAuth } from "@/hooks";
//IMPORTS COMPONENTS DE LA APP:
//IMPORTS Styles/Images DE LA APP:
import styles from "./JoinLayout.module.scss";

export const JoinLayout = (props) => {
  const { children } = props;
  const router = useRouter();
  const { user } = useAuth();

  if (user) {
    router.push("/");
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <Link href="/">
          <Image src={"/images/logo.png"} />
        </Link>
        <Link href="/">
          <Icon name="close" />
        </Link>
      </div>
      <div className={styles.blockLeft}>{children}</div>
      <div className={styles.blockRight}></div>
    </div>
  );
};
