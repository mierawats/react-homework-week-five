import React from "react";
import { ColorRing } from "react-loader-spinner";

export default function LoaderSpinner() {
  return (
    <div className="LoaderSpinner text-center">
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={[
          "#333333",
          "#444444",
          "#555555",
          "#666666",
          "#777777",
          "#888888",
          "#999999",
          "#aaaaaa",
          "#bbbbbb",
          "#cccccc",
        ]}
      />
    </div>
  );
}
