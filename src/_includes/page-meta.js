import React from "react";

//FIXME: locales like original? format dates like original. and clarify structure
const PageMeta = ({ date = null, modified = null }) => {
  return (
    (date || modified) && (
      <div className="page-meta">
        <p>
          Updated
          <time dateTime={modified || date} itemProp="dateModified">
            {modified || date}
          </time>
        </p>
      </div>
    )
  );
};

export default PageMeta;
