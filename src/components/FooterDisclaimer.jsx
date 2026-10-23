import React from "react";

const DISCLAIMER_TEXT =
  "Disclaimer: TriYash Financial Services is an independent marketing company that offers financial products and services through a network of independent affiliates. Please note that we do not provide legal, tax or investment advice. TriYash Financial Services has licensed insurance agents that offers insurance products only in the states where they are licensed. TriYash Financial Services is not a registered broker-dealer or a registered investment advisor and does not give investment advice.";

export default function FooterDisclaimer() {
  return (
    <div className="mt-14 border-t border-primary-foreground/15 pt-8">
      <p className="text-xs leading-relaxed text-primary-foreground/55">
        {DISCLAIMER_TEXT}
      </p>
    </div>
  );
}