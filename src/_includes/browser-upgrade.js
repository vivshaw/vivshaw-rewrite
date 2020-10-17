import React from "react";

const __html = `
<!--[if lt IE 9]>
  <div class="upgrade notice-warning">
    <strong>
      Your browser is quite old!
    </strong>
    Why not <a href="https://browsehappy.com/">upgrade to a newer one</a> to better enjoy this site?
  </div>
<![endif]-->
`;

const BrowserUpgrade = () => (
  <div id="browser-upgrade" dangerouslySetInnerHTML={{ __html }} />
);

export default BrowserUpgrade;
