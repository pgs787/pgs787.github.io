// @flow strict
import React from "react";
import Author from "./Author";
import Contacts from "./Contacts";
import Copyright from "./Copyright";
import Menu from "./Menu";
import styles from "./Sidebar.module.scss";
import { useSiteMetadata, useTagsList } from "../../hooks";
import Tags from "../Post/Tags";

type Props = {
  isIndex?: boolean
};

const Sidebar = ({ isIndex }: Props) => {
  const { author, copyright, menu } = useSiteMetadata();
  const tags = useTagsList();

  return (
    <div className={styles["sidebar"]}>
      <div className={styles["sidebar__inner"]}>
        <Author author={author} isIndex={isIndex} />
        <Menu menu={menu} />
        <Contacts contacts={author.contacts} />
        <Copyright copyright={copyright} />
        <Tags
          tags={tags.map(tag => tag.fieldValue)}
          tagSlugs={tags.map(tag => `/tag/${tag.fieldValue}`)}
        />
      </div>
    </div>
  );
};

export default Sidebar;
